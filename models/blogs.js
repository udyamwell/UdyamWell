const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
        // unique: true,
        minlength: [4, "Please provide a title least 4 characters "],
    },
    content: {
        type: String,
        required: [true, "Please a provide a content "],
        minlength: [10, "Please provide a content least 10 characters "],
    },
    // image: {
    //     type: String,
    //     default: "default.jpg"
    // },

    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],

    likeCount: {
        type: Number,
        default: 0
    },
    comments: [{
            type: mongoose.Schema.ObjectId,
            ref: "Comment"
    }],

    commentCount: {
        type: Number,
        default: 0
    }
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;