import mongoose from "mongoose";

const Lecture_schema = mongoose.Schema({
    video_Category:{
        type:String,
        required:true,
    },
    video:{
        type:String,
        required:true,
        unique:true
    },
    thumbnail:{
        type:Number,
        required:true,
    },
    upload_date:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
    }
})
const Lecture = new mongoose.model('User', Lecture_schema);

export default Lecture;
