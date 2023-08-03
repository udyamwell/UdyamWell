const Course = require('../../../models/courses');
const Video = require('../../../models/videos');
const fs = require('fs');
const path = require('path');

// -------------------> TO CREATE THE COURSE  <-----------------------
module.exports.courseData =async function (req,res){
  try{
    await Course.uploadCourse(req,res,function(err){
        if(err){
          console.log("Multer err=====>",err);
          return;
        }
        console.log("req.body ===>",req.body);
        console.log("req.body ===>",req.file);
         const name =  req.body.name;
         const description = req.body.description;
         const isPaid = req.body.isPaid;
         const cost = Number(req.body.cost);
        //  const catagory = req.body.description;
    
        let imagePath = req.file.filename;
    
          const courses = new Course({
            name,
            image: imagePath,
            description,
            isPaid,
            cost,
            // catagory
          });
    
          courses.save();
          console.log("values saved successfully");
          return res.status(201).send({data:courses});
      })
  }catch(err){
    res.status(500).json({message:"Unable to save data"});
    console.log("Error",err);
    return;
  }

}

// -------------------> TO FETCH THE COURSE  <-----------------------

module.exports.fetchData = async function(req,res){
    let courses;
    try{
         courses = await Course.find({});
    }catch(err){
        res.status(400).json({message:"Unable to fetch data"});
        console.log(err);
        return;
    }
    res.status(200).json({
        courses:courses
    });
}

// -------------------> TO UPDATE THE COURSE  <-----------------------

module.exports.updateData = async function(req,res){

  const _id = req.params.id;
    let course = await Course.findById(_id);
    console.log("couse found",course);
    try {
        // await Course.uploadCourse(req,res,async function(err){
    
        //     if (!course) {
        //       return res.status(404).json({
        //         message: "Course not found",
        //       });
        //     }
        console.log("vod",req.body)
            // Assuming you have the updated data in the request body
            const updatedData = {
              name: req.body.name,
              description: req.body.description,
              isPaid: req.body.isPaid,
              cost: req.body.cost,
            };
                  // Check if there is a new image file in the request
    // if (req.file) {
    //     // Delete the previous image file from the folder
    //     if (course.image) {
    //       const imagePath = path.join(__dirname, '../../../',Course.imagePath, course.image);
    //       fs.unlinkSync(imagePath);
    //     }
  
    //     // Update the image path in the updatedData object
    //     updatedData.image = req.file.filename;
    //   }
            // Update the course document
            await Course.findByIdAndUpdate({_id}, updatedData,{new:true});
            const result = Course.findOne({_id:_id});
            return res.status(200).send(result);
        // });
      } catch (err) {
        console.log("****** Error:", err);
        return res.status(500).json({
          message: "Internal Server Error",
        });
    }
}


// -------------------> TO DELETE THE COURSE  <--------------------------

module.exports.deleteData = async function(req,res){
    try{
        let course =  await Course.findById(req.params.id);

        // .id means converting the Object id into string
 
        if(course){
            course.deleteOne();
            await Video.deleteMany({post:req.params.id});
        }else{
            return  res.status(400).json({
                message:"Course not found"
            })
        }

            return  res.status(200).send(course)

    }catch(err){
        console.log("****** Error:",err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}