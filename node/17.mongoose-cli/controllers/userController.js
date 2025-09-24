const connect = require('../connect');
const mongoose = require('mongoose');
const db = connect();

//step 1 : create the schema.
const userSchema = new mongoose.Schema({
    name : String,
    age : Number
})

//step3 : create the model
const User = db.model('User',userSchema,'users'); //1. modelName, 2.schema 3. collectionName
//step4 : Perform CRUD Operation
const UserController = {
    insert : function(formData){
       const user = new User(formData);
       user.save().then(function(data){
            console.log('User Created Successfully',data);
       }).catch(function(error){
            console.log('User Creation Error',error);
       });

    },
    selectOne : function(user_id){

    User.find({_id:user_id}).then(function(data){
            console.log('User Data',data);
       }).catch(function(error){
            console.log('Error Finding the data',error);
    });


    },
    selectAll : function(){

         User.find().then(function(data){
            console.log('User Data',data);
       }).catch(function(error){
            console.log('Error Finding the data',error);
       });

    },
    updateOne : function(){
    },
    delete: function(){
    }
}

module.exports = UserController;





