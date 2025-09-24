const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    isMarried : Boolean,
    hobbies : [String],
    orders : [
        {
            product : String,
            quantity : Number,
            price : Number
        }
    ]
})
