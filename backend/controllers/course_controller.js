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