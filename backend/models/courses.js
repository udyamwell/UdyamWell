const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const IMAGE_PATH =  path.join('/uploads/course/thumbnails');
// const VIDEO_PATH =  path.join('/uploads/course/videos');
// const fs = require('fs');


const coursesSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    videos:[
        {
            type: mongoose.Schema.ObjectId,
            ref:'Video'
        }
    ],
    isPaid:{
        type:Boolean,
        required:true,
    },
    cost:{
        type:Number
    }
},{
    timestamps:true
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'|| file.fieldname === 'image') {
            cb(null,  path.join(__dirname,"..",IMAGE_PATH));
          } 
    },
    filename: function (req, file, cb) {
    cb(null,  Date.now()+"_"+ file.originalname);
    },
  });

  const fileFilter = (req,file,cb)=>{
    if(file.fieldname === 'image'){
        (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg')?cb(null,true):cb(null,false)
    }
  }
  

  coursesSchema.statics.uploadCourse = multer({ 
    storage: storage ,
    fileFilter:fileFilter,
}).single('image');

// coursesSchema.statics.uploadCourse = multer({ 
//     storage: storage ,
//     fileFilter:fileFilter,
// }).fields([{name:'thumbnail', maxCount:1}]);

coursesSchema.statics.imagePath = IMAGE_PATH;
// lectureSchema.statics.videoPath = VIDEO_PATH;

const Course = mongoose.model('Course', coursesSchema);

module.exports = Course;