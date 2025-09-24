// App2 

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();

//built in middleware
// req and response <----> middleware
//Application or Global 
app.use(bodyParser.json()); //json input
app.use(bodyParser.urlencoded({extended:true})); //form data 


// How to sent get,post,put,patch,delete
app.get("/",function(req,res){
    res.status(200).json({
        "message" : "Express Server Started"
    })
})


let students = [
            {
                rollno : 1001,
                name : "ravi",
                class : "Btech"
            },
             {
                rollno : 1002,
                name : "shankar",
                class : "Btech"
            }
];

//Student GET Request
app.get('/students',function(req,res){
    //Array of Object -> student data -> db.json,mongodb,mongodb atlas,mysql,any database.
    res.status(200).json({
        code : 200,
        message : "Student Record found",
        status : true,
        error : [],
        data :  students
    })
});

app.delete('/students/:student_id',function(req,res){
    const student_id = req.params.student_id;

    if(!student_id){
        res.status(500).json({
        code : 500,
        message : "Student ID is Required",
        status : false,
        error : [
            "missing key student_id"
        ],
        data :  []
        });

        return; //mendatory
    }



    let position = -1;

    for(let i=0;i<students.length;i++){
        if(students[i].rollno == student_id){
            position = i;
            break;
        }
    }

    if(position > -1){

        students.splice(position,1);

        res.status(200).json({
        code : 200,
        message : "Student Record Deleted Successfully",
        status : true,
        error : [],
        data :  students
    })
    }else{
        res.status(404).json({
        code : 404,
        message : "Student Record Does not exist",
        status : false,
        error : [],
        data :  []
        });
    }    
});

//Post Student Logic
app.post('/students',function(req,res){
    let srollno = req.body['rollno'] ? req.body['rollno'] : "" ;
    let sname = req.body['name'] ? req.body['name'] : "";
    let sclass = req.body['class'] ? req.body['class'] : "";
    students.push({
        rollno : srollno.trim(),
        name : sname.trim(),
        class : sclass.trim(),
    });
    res.status(201).json({
        code : 201,
        message : "Student Record Created Successfully",
        status : true,
        error : [],
        data :  students
    });
});

//Update Student Logic
app.put('/students/:student_id',function(req,res){
    const student_id = req.params.student_id;
    if(!student_id){
        res.status(500).json({
        code : 500,
        message : "Student ID is required",
        status : false,
        error : [
            "missing key student_id"
        ],
        data : []
    });

    return;
    }

    let position = -1;
    for(let i=0;i<students.length;i++){
        if(students[i].rollno == student_id){
            position = i;
            break;
        }
    }

    if(position >  -1){
        
        let sname = req.body['name'] ? req.body['name'] : "";
        let sclass = req.body['class'] ? req.body['class'] : "";

            students[position]['name'] = sname;
            students[position]['class'] = sclass; 

            res.status(201).json({
                code : 201,
                message : "Student Record Updated Successfully",
                status : true,
                error : [],
                data :  students
            });
    }else{
             res.status(404).json({
                code : 404,
                message : "Student Does not exist",
                status : false,
                error : [],
                data :  []
            });
    }
});


app.listen(PORT,function(){
    console.log('Server Started at PORT=',PORT);
})