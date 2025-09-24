const connect = require('../connect');
const mongoose = require('mongoose');

const conn = connect();
const userSchema = new mongoose.Schema({
    name : String,
    age : Number
});

const User = conn.model('User',userSchema,"users");
const UserActions = {
    insert : function(name,age){
             const user  = new User({
            name : name ,
            age:Number(age)
        });
            user.save().then(function(data){
            console.log('Record Inserted ',data);
        }).catch(function(error){
            console.log('Record Inserted Error',error);
    });
    }
}

module.exports = UserActions;









