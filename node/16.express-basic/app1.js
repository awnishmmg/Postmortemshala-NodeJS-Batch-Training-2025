// App1 Code
const express = require('express');

const PORT = 8000;
const app = express();

app.get("/",function(req,res){
    res.status(200).json({
        "message" : "Express Server Started"
    })
})

app.listen(PORT,function(){
    console.log('Server Started at PORT=',PORT);
})