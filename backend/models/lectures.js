const mongoose = require("mongoose");

const lectureSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:Buffer,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    isPaid:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
});

const Lectures = mongoose.model('Lectures', lectureSchema);

module.exports = Lectures;

