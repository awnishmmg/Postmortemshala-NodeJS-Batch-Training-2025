const express = require('express');
const {body,validationResult} = require('express-validator');

const app = express();
app.use(express,json());

const UserValidationRules = [
    body('name').trim().notEmpty().withMessage('Name is Required'),
   body("username")
  .trim()
  .isLength({ min: 3, max: 20 })
  .withMessage("Username must be 3–20 chars long")
  .matches(/^[a-zA-Z0-9_]+$/)
  .withMessage("Only letters, numbers, and underscores allowed"),

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
