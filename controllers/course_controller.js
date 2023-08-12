const Lecture = require('../models/lectures');
// const path = require('path');

module.exports.lectureData =async function (req,res){
  try{
    await Lecture.uploadeData(req,res,function(err){
        if(err){
          console.log("Multer err=====>",err);
        }
        console.log("video",req.body);
        console.log("video",req.files);

         const name =  req.body.name;
         const description = req.body.description;
         const  category = req.body.category;
         const isPaid = req.body.isPaid;
         const cost = Number(req.body.cost);
    

          let imagePath = req.files.image[0].filename;
          let videoPath =  req.files.video[0].filename;
    
          const lectures = new Lecture({
            name,
            image: imagePath,
            video:videoPath,
            description,
            category,
            isPaid,
            cost
          });
    
          lectures.save();
          console.log("values saved successfully");
          return res.status(201).send({message:"Data saved successfully"});
      })
  }catch(err){
    console.log("Error",err);
  }
}




module.exports.fetchData = async function (req,res){
  try {
    // Use Mongoose's .find() method to fetch all documents from the "Lectures" collection
    const allLectures = await Lecture.find();

    console.log(allLectures);

    // Return the fetched data as a JSON response
    return res.send(allLectures);
    // return res.json(allLectures);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}