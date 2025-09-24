const connect = require('../connect');
const mongoose = require('mongoose');

const conn = connect();
const userSchema = new mongoose.Schema({
    name : String,
    age : Number
});

//use of lean function.
const User = conn.model('User',userSchema,"users");
const UserActions = {
    selectOne : function(user_id){
            User.find({_id : user_id}).then(function(data){
            console.log(data)
        }).catch(function(error){
            console.log('No Record found',error);
    });
    }
}

module.exports = UserActions;









