const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const Routes = require('./routes/pageRoutes');

const PAGES_PATH =  path.join(__dirname,"pages");
// console.log(PAGES_PATH)
const PORT = 8000;

const server = http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type' : 'text/html',
    });
    const endPoint  = req.url;
    if(Routes[endPoint]){
        const filename = Routes[endPoint];
        if(fs.existsSync(`${PAGES_PATH}/${filename}`)){
            const content = fs.readFileSync(`${PAGES_PATH}/${filename}`,"utf-8");
            res.write(content);
            res.end();
        }else{
            console.log(filename+'File Does Not Exist')
            res.write(filename+'File Does Not Exist');
            res.end();
        }
    }else{
        res.write("<h1>OOPS Page Does Not Exist</h1>");
        res.end();
    }
   
});

server.listen(PORT,function(){
    console.log('server started at port =',PORT);
})