const http = require('node:http');
const path = require('node:path');
const fs=  require('node:fs');
const qs = require('node:querystring');
const PORT = 8000;

const server = http.createServer(function(req,resp){
    const endPoint = req.url;
    
    //
    if(endPoint == '/'){
         resp.writeHead(200,{
         "Content-type" : "text/html"
        });
        resp.write("Welcome to Node Server");
        resp.end();

    }else if(endPoint == '/login'){
            resp.writeHead(200,{
            "Content-type" : "text/html"
            });
             const filepath = path.join(__dirname,'pages','login.html');
            if(!fs.existsSync(filepath)){
                console.log(filepath,'file not found');
                resp.write(filepath,"does not exist");
                resp.end();

             }else{
                const content = fs.readFileSync(filepath,"utf-8")
                resp.write(content);
                resp.end();
            }
    }
    else if(endPoint == '/verify-user'){
        if(req.method == 'POST'){

            req.on('data',function(chunk){
                const formData = qs.parse(Buffer.from(chunk).toString());

                const email = formData['user_email'];
                const password = formData['user_password'];

                if(email.trim() == 'admin@gmail.com' && password.trim() == "12345"){
                     resp.writeHead(302,{
                        "location" : "/admin/dashboard"
                     });
                     resp.end();
                }else{
                     resp.writeHead(200,{
                        "Content-type" : "text/html"
                     });
                     resp.write('Invalid User Name or Password');
                     resp.end();
                }


            })
        
        }else{
           resp.writeHead(302,{
            "location" : '/login'
           });
           resp.end();
        }
    }else if(endPoint == '/admin/dashboard'){
        resp.write('Welcome to Admin Dashboard');
        resp.end();
    }
    else{
         resp.writeHead(404,{
            "Content-type" : "text/html"
        });
        resp.write('OOPs Page not found');
        resp.end();
    }
});

server.listen(PORT,function(){
    console.log('Server running on port=',PORT);
})