require('dotenv').config({quiet:true});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.get('/student',function(req,res){

    // const student  from mongodb
    const students = [
        {
            name : "A",
            class  : "B"
        }
    ];

    res.status(200).json({
        code : 200,
        status : true,
        message : "Student Record found",
        data : students,
        error : [],
    })
});







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

app.listen(PORT,function(){
    console.log('Server Started at PORT = '+PORT);
    connect();
});




