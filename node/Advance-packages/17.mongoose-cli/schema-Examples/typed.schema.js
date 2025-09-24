const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : String,
        required : age,
        min : 18,
        max : 60
    },
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

// No Extra Validation