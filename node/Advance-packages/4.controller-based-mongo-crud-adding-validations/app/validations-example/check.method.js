const express = require('express');
const {body,validationResult, check} = require('express-validator');

//  Universal method to check any type of fields in custom or predefined Headers
const app = express();
app.use(express,json());

const UserValidationRules = [
    body('name').trim().notEmpty().withMessage('Name is Required'),
    check('email').trim().notEmpty().withMessage('Email is Required').isEmail().withMessage('Invalid Email'),
    check('password').trim().notEmpty().withMessage('password is Required').isLength({min:8,max:15}).withMessage('Password must be B/w 8 and 15'),
    check('age').notEmpty().isInt({
        min : 18,
        max : 30
    }).withMessage("Age must be +ve Integer")
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
