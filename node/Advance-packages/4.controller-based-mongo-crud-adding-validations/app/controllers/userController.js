const connect = require('../connect');
const mongoose = require('mongoose');
const joi = require('joi');
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

     // define schema 
    const schema = joi.object({
    name: joi.string()
        .required()
        .messages({
            "string.base": "{#label} must be a string",
            "any.required": "{#label} is required"
        }),
    age: joi.number()
        .min(18)
        .max(30)
        .required()
        .messages({
            "number.base": "{#label} must be a number",
            "number.min": "{#label} must be at least 18",
            "number.max": "{#label} cannot exceed 100",
            "any.required": "{#label} is required"
        })
   });  

     const {error,value} = schema.validate(formData,{abortEarly:false});

      if(error){
          error.details.forEach(function(error){
               console.log(error.message);
          });
      }else{
          const user = new User(value);
          user.save().then(function(data){
            console.log('User Created Successfully',data);
          }).catch(function(error){
            console.log('User Creation Error',error);
          });
      }

       

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





