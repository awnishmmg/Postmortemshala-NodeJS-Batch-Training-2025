const express = require('express');
const {body,validationResult} = require('express-validator');

const app = express();
app.use(express,json());


const UserValidationRules = [
    body('name').trim().notEmpty().withMessage('Name is Required'),
    body('email').trim().notEmpty().withMessage('Email is Required').isEmail().withMessage('Invalid Email'),
    body('password').trim().notEmpty().withMessage('password is Required').isLength({min:8,max:15}).withMessage('Password must be B/w 8 and 15'),
    body('age').notEmpty().withMessage('Age is mendatory').isInt({
        min : 18,
        max : 30
    }).withMessage("Age must be +ve Integer"),

    body('confirmPassword').trim().notEmpty().withMessage('password is Required').isLength({min:8,max:15}).withMessage('Password must be B/w 8 and 15'),
    // Custom Validators :
    body("password").custom((value, context) => {
    if (value !== context.req.body.confirmPassword) {
        throw new Error("Passwords do not match");
    }
        return true;
    }),


]


app.post('/user',UserValidationRules,function(req,res){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            code : 400,
            message : "Validator errors",
            status : false,
            data : [],
            error : errors.array(),
        });
    }

    if(errors.isEmpty()){
        res.status(200).json({
            code : 200,
            message : "Valid Response",
            status : true,
            data : [],
            error : [],
        })
    }
});
