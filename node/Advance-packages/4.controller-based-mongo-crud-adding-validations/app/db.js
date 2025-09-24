const mongoose = require('mongoose');

// database connect we need database name collection name hostname
// and port 

// port : 27017
// hostname : 127.0.0.1
// database : company
// collection : users 

//Promise Based
const conn = mongoose.connect('mongodb://127.0.0.1:27017/company',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

conn.then(function(){
    console.log('Database connected');
}).catch(function(error){
    console.log('Connection Error',error);
});

module.exports = conn;


