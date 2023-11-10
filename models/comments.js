const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    story: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Story"
    },
    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [3, " Please provide a content least 3 characters"]
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    likeCount: {
        type: Number,
        default: 0
    },

})

const Comments = mongoose.model('Comment', commentSchema);
module.exports = Comments;