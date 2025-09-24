const http = require('node:http');
const path = require('node:path');
const nodemailer = require('nodemailer');

const emailConfig = require("./config/email.json");
const PORT = 8000;
//npm install nodemailer
//Create Transport Layer Node Mailer
const transport = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure : true,
    auth : {
        user : emailConfig.email_Id,
        pass : emailConfig.password
    }
});

const server = http.createServer(function(req,resp){
    const endPoint = req.url;

    if(endPoint == "/"){
        resp.write("Welcome to Node Js");
        resp.end();
    }
    else if(endPoint == "/send-email"){     
        transport.sendMail({
            from : "Seek Solution Admin <smtp.user@seeksolution.org>",
            to:"2005.simaunihao@gmail.com,awisoft.net@gmail.com",
            subject : "Syllabus of Btech 3rd Year Aktu",
            //text : "Hy This is sample Email",
            html : "<p> Please find the Btech 3rd Year Syllabus attached</p>",
            attachments :[
                {
                    filename : "Btech Syllabus.pdf",
                    path : path.join(__dirname,"mail/docs/","btech-cs-syllabus.pdf")
                }
            ]
        },function(error,info){
            if(error ==  null){
                console.log('Email Send Sucessfully : ',info.messageId);
                console.log(info.response);
                
                resp.write('Email Send Sucessfully :'+info.messageId);
                resp.end();
            }else{
                console.log('Email Sending Failed',error)
                resp.write('Email Sending Failed:'+error);
                resp.end();
            }
        });
    }
    
   
});

server.listen(PORT,function(){
    console.log('Server running on port=',PORT);
})