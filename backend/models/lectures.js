import mongoose from "mongoose";

const Lecture_schema = mongoose.Schema({
    video_name:{
        type:String,
        required:true,
    },
    video_Category:{
        type:String,
        required:true,
    },
    video_link:{
        type:String,
        required:true,
        unique:true
    },
    thumbnail:{
        type:String,
        required:true,
    },
    upload_date:{
        type:String,
        required:true,
    },
    isPaid:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})
const Lecture = new mongoose.model('User', Lecture_schema);

export default Lecture;
