const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Lectures" },
    name: {
      type: String,
      required: true,
    },
  });
const userschema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  course :[courseSchema]
});

const course = mongoose.model("Courses", userschema);

module.exports = course;
