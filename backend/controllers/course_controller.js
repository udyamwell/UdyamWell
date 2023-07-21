const Lecture = require('../models/lectures');
// const express = require("express");
module.exports.lectureData = async  function(req,res){
  console.log("this is req.body",req.body);
  const  {
    name,
    image,
    description,
    category,
    isPaid,
    link
  } = req.body;

    try{
      let linkVideo = await Lecture.findOne({link:link});

      if(linkVideo){

        console.log("Video alredy present ");
        res.status(409).send({message: "Video already registerd"});

      }else{
        const lectures = new Lecture({
          name,
          image,
          description,
          category,
          isPaid,
          link
        });

        await lectures.save();
        console.log("Video uploaded successfully");
        return res.status(201).send({ message: "Data saved successfully" });
      }
    }catch(err){
        console.log('Error: Unable to save lectures',err);
        return res.status(500).send({ message: "Unable to save lectures" });

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