const mongoose = require("mongoose");

// One Schema inside Another Schema 
const addressSchema =  new mongoose.Schema({
    street : String,
    city : String,
    pincode : Number
});

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    isMarried : Boolean,
    address : addressSchema
})
