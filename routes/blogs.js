const express = require('express');
const router = express.Router();

// const Blog = require("../controllers/blogs");
const { createNewBlog } = require("../controllers/blogs")

// router.get('/blogs',Blog.getAllBlogs);

router.post('/createNewBlog',createNewBlog);

// router.post('/blogs/addComment/:postId',Blog.addComment);
// router.post('/blogs/addComment/',Blog.addComment);

// router.post('/blogs/like',Blog.likePost);

// router.post('/blogs/unlike',Blog.unlikePost);

module.exports = router;