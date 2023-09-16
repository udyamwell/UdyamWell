const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  title : String,
  description : String,
  thumbnail : String,
  filename: String,
  originalname: String,
  thumbnailPath: String,
  mimetype: String,
  size: Number,
  path: String,
  // You can add more fields as needed.
});

const File = mongoose.model('File', fileSchema);

module.exports = File;