const express = require('express');
const {body,validationResult, check,query,param,header} = require('express-validator');

const app = express();
app.use(express,json());

const UserValidationRules = [
   check("password").isLength({ min: 6 }),          // looks everywhere
   check("email").isEmail().isLowercase(),          // looks everywhere
   check("id", "Invalid ID").isInt().bail().toInt(), // everywhere

// Scoped versions
check("email").isEmail().withMessage("Invalid"),  // searches everywhere
body("email").isEmail().withMessage("Invalid"),    // only body
query("page").isInt().withMessage("Must be number"), // only query
param("id").isMongoId().withMessage("Invalid ID"),   // only params

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
