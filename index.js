const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const express = require('express');
const port = 8080;
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const File = require('./models/file');
// adding monggose 
const errorHandler = require('./config/errorHandler')
const db = require('./config/mongoose').connect();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const allowedOrigins = ['http://localhost:3000', 'https://udyamwell.azurewebsites.net', 'https://www.udyamwell.com', 'udyamwell.com']
app.use(cors());     // communicate with ui and backend 
// use express router 
app.use('/',require('./routes'));
app.use(errorHandler);
app.set('view engine', 'ejs');
app.set('views','./views');
// app.use('/uploads',express.static('./uploads'));
app.use('/uploads',express.static(__dirname +'/uploads'))
app.use(express.static('./frontend/build'));

// app.post('/register',(req,res)=>{
//     res.send("I am live");
// });

app.get('/lecture/:id', async(req,res)=> {
    const id = req.params.id;
    try {
      const lecture = await File.findById(id);
      return res.json({
        lecture
      })
    } catch (error) {
      console.log(error)
    }
  })
  app.get('/lecture', async (req, res) => {
    try {
      const lectures = await File.find();
      return res.json({
        lectures,
        isError: false
      })
    }
    catch (err) {
      console.log(err);
    }
  })
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
})

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/course/videos/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  
  const upload = multer({ storage });
  
  
  
  // Define a route for video uploads
  const cpUpload = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'video', maxCount: 1 }])
  app.post('/upload', cpUpload, async (req, res) => {
    try {
      // const { files } = req;
      const thumbnail = req.files.thumbnail[0];
      const video = req.files.video[0];
  
      if (!thumbnail || !video) {
        return res.status(400).json({ message: 'Please select a video file' });
      }
      
      //create new File object
      const newFile = new File({
        title: req.body.title,
        description: req.body.description,
        filename: video.filename,
        originalname: video.originalname,
        thumbnail: thumbnail.originalname,
        thumbnailPath: thumbnail.filename,
        mimetype: video.mimetype,
        size: video.size,
        path: video.path,
      });
  
      // Save the file data to MongoDB
      await newFile.save();
  
      // In a real application, you would save the file information to a database
      // For simplicity, we're just sending a success message
      res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
      console.error('Error uploading video:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.listen(port,(err)=>{
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running at port: ${port}`);
});


