const mongoose = require('mongoose');
//Event Listner Based

function connect(){
    const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/company',{
    useNewUrlParser : true, // New URL Encoding Techqniue.
    useUnifiedTopology : true, //Topology : Network configuration 
    // Start Network, Mesh Network ,circular topology
});

conn.on('connected',function(){
console.log('database connected');
});

conn.on('error',function(error){
console.log('connection Error',error);
});
    return conn;
}


module.exports = connect;
 



