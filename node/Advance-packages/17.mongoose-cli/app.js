const express = require('express');
const app = express();
const PORT = 8000;

app.get('/',function(req,res){
    res.status(200).json({
        code : 200,
        message : "Express Server started",
        status : true,
        data : [],
        error : []
    })
});


app.listen(PORT,function(){
    console.log('Server started at PORT=',PORT);
});