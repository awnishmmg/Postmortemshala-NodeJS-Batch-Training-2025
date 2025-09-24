const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username : {
    type : String,lowercase : true,unique : true,
    required : true,index : true,
  },
  email : {
    type :String,
    lowercase : true,
    unique : true,
    required : true,
    index : true,
  }
});
