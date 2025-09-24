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
    update : function(user_id,updatedData){
            User.findByIdAndUpdate({_id : user_id},updatedData,{new : true}).then(function(data){
            console.log('Record Updated Successfully',data);
        }).catch(function(error){
            console.log('No Record found',error);
    });
    }
}

module.exports = UserActions;









