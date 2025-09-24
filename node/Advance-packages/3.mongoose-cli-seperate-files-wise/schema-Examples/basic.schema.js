const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name : String,
    age : Number,
    createdAt : Date
});

// No Extra Validation