const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const IMAGE_PATH =  path.join('/uploads/course/thumbnails');
const VIDEO_PATH =  path.join('/uploads/course/videos');
const fs = require('fs')


const lectureSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    video:{
        type:String,
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
        type:Boolean,
        required:true,
    },
    cost:{
        type:Number
    },
    // link:{
    //     type:String,
    //     // required:true,
    //     // unique:true
    // }
},{
    timestamps:true
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'|| file.fieldname === 'image') {
            cb(null,  path.join(__dirname,"..",IMAGE_PATH));
          } else if(file.fieldname === 'video'){
            cb(null, path.join(__dirname,"..",VIDEO_PATH));
          } 
    },
    filename: function (req, file, cb) {
    cb(null,  Date.now()+"_"+ file.originalname);
    },
  });

  const fileFilter = (req,file,cb)=>{
    if(file.fieldname === 'image'){
        (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg')?cb(null,true):cb(null,false)
    }else if(file.fieldname === 'video'){
        (file.mimetype === 'video/mp4')?cb(null,true):cb(null,false);
    }
  }
  

  lectureSchema.statics.uploadeData = multer({ 
    storage: storage ,
    fileFilter:fileFilter,
}).fields([{name:'image', maxCount:1},{name:'video', maxCount:1}]);

lectureSchema.statics.imagePath = IMAGE_PATH;
lectureSchema.statics.videoPath = VIDEO_PATH;

const Lectures = mongoose.model('Lectures', lectureSchema);

module.exports = Lectures;

