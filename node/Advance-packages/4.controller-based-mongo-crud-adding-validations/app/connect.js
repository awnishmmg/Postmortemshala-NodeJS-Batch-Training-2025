require('dotenv').config();
const mongoose = require('mongoose');
//Event Listner Based

function connect(){

    const db  = mongoose.createConnection(process.env.MONGODB_URI,{
        useNewUrlParser : true, // New URL Encoding Techqniue.
        useUnifiedTopology : true, //Topology : Network configuration 
        // Star Network, Mesh Network ,circular topology
    });

//This is required on Older Version 
// In Latest version we donot require this.


    db.on('connected',function(){
    console.log('database connected');
    });

    db.on('error',function(error){
    console.log('connection Error',error);
    });

 return db;
}

module.exports = connect


