const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name : String,
   data : mongoose.Schema.Types.Mixed
});
