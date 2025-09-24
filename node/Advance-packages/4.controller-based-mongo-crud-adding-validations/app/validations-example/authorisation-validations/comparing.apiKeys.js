const { header, validationResult, query,body, check } = require("express-validator");

const ValidationMiddleWare = [
  //checking at body
  body("apiToken")
    .notEmpty().withMessage("Token missing")
    .equals("mysecretapikey123").withMessage("Invalid Token"),

  //checking at query
  query("apiToken")
    .notEmpty().withMessage("Token missing")
    .equals("mysecretapikey123").withMessage("Invalid Token"),

 //checking at header
  header("apiToken")
    .notEmpty().withMessage("Token missing")
    .equals("mysecretapikey123").withMessage("Invalid Token"),

    //checking at check
    check("apiToken")
    .notEmpty().withMessage("Token missing")
    .equals("mysecretapikey123").withMessage("Invalid Token"),
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

