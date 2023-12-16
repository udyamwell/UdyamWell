const express = require('express');
const router = express.Router();

const Blog = require("../controllers/blogs");
// const { createNewBlog } = require("../controllers/blogs")

// router.get('/',Blog.getAllBlogs);

router.post('/createNewBlog',Blog.createNewBlog);

router.post('/addComment/:postId',Blog.addComment);
// router.post('/blogs/addComment/',Blog.addComment);

router.post('/like/:postId',Blog.likePost);

router.post('/unlike/:postId',Blog.unlikePost);

module.exports = router;