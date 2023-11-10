const Blog = require("../models/blogs");

module.exports.createNewBlog = async (req,res) => {
    const { author, title, content } = req.body;

    console.log(author,"---",title,"---",content);
    // res.send("success");
    try {
        const newBlog = new Blog({
            author,
            title,
            content
        })

        newBlog.save()
        .then((response)=>{
            console.log("Blog created --->", response);
            res.json({response});
        })
        .catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.getAllBlogs = async (req,res) => {

    const allBlogs = Blog.find();

    console.log(allBlogs);
}

// Controller for liking a blog post
module.exports.likePost = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user._id; // Assuming you're using user authentication
  
    try {
      const post = await Blog.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
  
      if (post.likes.includes(userId)) {
        return res.status(400).json({ message: 'You already liked this post' });
      }
  
      post.likes.push(userId);
  
      const updatedPost = await post.save();
      return res.json(updatedPost);
    } catch (error) {
      return res.status(500).json({ error: 'something went wrong!' });
    }
  };
  
  // Controller for unliking a blog post
  module.exports.unlikePost = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user._id; 
  
    try {
      const post = await Blog.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      const likeIndex = post.likes.indexOf(userId);
  
      if (likeIndex === -1) {
        return res.status(400).json({ message:"'You haven't liked this post yet" });
      }
  
      post.likes.splice(likeIndex, 1);
  
      const updatedPost = await post.save();
      return res.json(updatedPost);
    } catch (error) {
      return res.status(500).json({ error: 'something went wrong!' });
    }
  };

  // Controller for adding a comment to a blog post
module.exports.addComment = async (req, res) => {
    const postId = req.params.postId;
    const { comment } = req.body;
    const userId = req.user._id; 
  
    try {
      const post = await Blog.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      const newComment = {
        comment,
        author: userId,
      };
  
      post.comments.push(newComment);
  
      const updatedPost = await post.save();
      return res.json(updatedPost);
    } catch (error) {
      return res.status(500).json({ error: 'something went wrong!' });
    }
  };