const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const IMAGE_PATH =  path.join('/uploads/course/videoThumbnails');
const VIDEO_PATH =  path.join('/uploads/course/videos');

const videoSchema = new  mongoose.Schema({
    videoName:{
        type:String,
        required:true,
    },
    videoThumbnail:{
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
    }
},{
    timestamps:true
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'|| file.fieldname === 'videoThumbnail') {
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
    if(file.fieldname === 'videoThumbnail'){
        (file.mimetype === 'image/jpg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg')?cb(null,true):cb(null,false)
    }else if(file.fieldname === 'video'){
        (file.mimetype === 'video/mp4')?cb(null,true):cb(null,false);
    }
  }
  

  videoSchema.statics.uploadVideo = multer({ 
    storage: storage ,
    fileFilter:fileFilter,
}).fields([{name:'videoThumbnail', maxCount:1},{name:'video', maxCount:1}]);

videoSchema.statics.imagePath = IMAGE_PATH;
videoSchema.statics.videoPath = VIDEO_PATH;




const Video = mongoose.model('Video',videoSchema);

module.exports = Video;

