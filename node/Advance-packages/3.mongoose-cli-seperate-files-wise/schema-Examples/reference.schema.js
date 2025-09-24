const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title : String,
    author_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
   
});
