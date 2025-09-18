const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const Routes = require('./routes/pageRoutes');
const extensions = require("./extension.json");


const PORT = 8000;

const server = http.createServer(function(req,res){
   
    const endPoint  = req.url;
    if(Routes[endPoint]){

    const fileExtension = path.extname(Routes[endPoint]);
    const contentType = extensions[fileExtension]['type'];

    const filePath = extensions[fileExtension]['path'];

         res.writeHead(200,{
        'Content-Type' : contentType,
         });

        const filenamePath = path.join(__dirname,filePath,Routes[endPoint]);
        
        console.log(filenamePath)

        if(fs.existsSync(filenamePath)){
            const content = fs.readFileSync(filenamePath,"utf-8");
            res.write(content);
            res.end();
        }else{
            console.log(filename+'File Does Not Exist')
            res.write(filename+'File Does Not Exist');
            res.end();
        }
    }else{

        const ERROR_PATH = path.join(__dirname,"pages","errors");
        const content = fs.readFileSync(`${ERROR_PATH}/404.html`,"utf-8");
        res.write(content);
        res.end();
    }
   
});

server.listen(PORT,function(){
    console.log('server started at port =',PORT);
})