require('dotenv').config({quiet:true});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {check,body,validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

//body parser 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.status(200).json({
        code : 200,
        status : true,
        message : "Express Server Started at PORT"+PORT,
        data : [],
        error : [],
    })
});

// Connection
function connect(){
    const db = mongoose.createConnection(process.env.MONGODB_URI);
    db.on('connected',function(){
        console.log('Database connected');
    })
    db.on('error',function(error){
        console.log('Connection Error',error);
        process.exit();
    });
    return db;
}

// Rest Api : student
const db = connect();
const studentSchema = new mongoose.Schema({
    _id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        trim : true,
        alias :  "std_id"
    },
    std_name  : {
        type : mongoose.Schema.Types.String,
        required : true,
        trim: true,
    },
    std_marks : {
        type : mongoose.Schema.Types.Number,
        required : true,
        min : 0,
        max : 100,
    },
    std_class : {
        type :mongoose.Schema.Types.String,
        required : true,
        trim : true,
    },
    std_email : {
        type : mongoose.Schema.Types.String,
        unique : true,
        required : true,
        trim : true,
    },
    std_password : {
        type : mongoose.Schema.Types.String,
        required : true,
        trim : true,
    }
});

const StudentModel = db.model('StudentModel',studentSchema,'students');

//Define Validation Rules
const ValidationRules = [   
    //Student_name
     body('std_name')
    .isEmpty()
    .withMessage('Student Name is Required')
    .matches(/^[a-zA-Z ]+$/)
    .withMessage('Enter the Valid Name')
    .trim(),

    //student class 
    body('std_class')
    .isEmpty()
    .withMessage('class is required')
    .trim(),

    //student marks
    body('std_marks')
    .isEmpty()
    .withMessage('marks are required')
    .trim(),

    //student email 
    body('std_email')
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Enter Valid Email')
    .trim()
    .custom(function(value,context){
        StudentModel.findOne({std_email : value}).then(function(data){
            if(data){
                throw new Error("This Email already exist,try different email");
            }
        }).catch(function(error){
            throw new Error(error);
        });
        return true;
    }),

    body('std_password').isEmpty().withMessage('Password is Required').trim()

]

app.post('/student',ValidationRules, function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
            //save the student
        const student = new StudentModel({
        std_name : req.body.std_name,
        std_class : req.body.std_class,
        std_marks : req.body.std_marks,
        std_email : req.body.std_email,
        std_password : bcrypt.hash(req.body.hash,16)
    })
    student.save().then(function(data){
        res.status(201).json({
            code : 201,
            status : true,
            error : [],
            message : "Student Record created",
            data : data
        });
    }).catch(function(error){
        res.status(500).json({
            code : 500,
            status : false,
            error : [error],
            message : "Something went wrong",
            data : []
        });
    });

            //end the student
    }else{
        res.status(400).json({
            code : 400,
            status : false,
            message : "Validation Error",
            error : errors.array(),
            data : []
        })
    }


});

app.get('/student',function(req,res){

});

app.get('/student/:student_id',function(req,res){

});

app.put('/student/:student_id',ValidationRules,function(req,res){

});

app.delete('/student/:student_id',function(req,res){

});












app.listen(PORT,function(){
    console.log('Server Started at PORT = '+PORT);
    // connect();
});




