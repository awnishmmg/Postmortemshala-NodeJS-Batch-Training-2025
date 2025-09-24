const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    birthday : {
        type :mongoose.Schema.Types.Date
    },
    id : {
        type : mongoose.Schema.Types.ObjectId,
    },
    bufferData : {
       type: mongoose.Schema.Types.Buffer
    }
});
