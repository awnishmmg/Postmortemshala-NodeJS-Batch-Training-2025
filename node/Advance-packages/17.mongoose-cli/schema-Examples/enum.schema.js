const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name : String,
   lastName : mongoose.Schema.Types.String,
   data : mongoose.Schema.Types.Mixed,
   role : {
    type: String,
    enum : ['admin','user','guest'],
    default : "user"
   }
});
