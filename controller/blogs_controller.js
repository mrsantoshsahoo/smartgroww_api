const Blog = require("../model/blogs_model");

const post_blog = async (req, res) => {
  try {
    const blog = new Blog({
        image:req.body.image,
        title:req.body.title,
        subTitle:req.body.subTitle, 
        decryption:req.body.decryption
    });
    const blog_data = await blog.save();
    res.status(200).send({
        statusCode: 200,
        statusMessage: "success",
        message: "Successfully created a blog",
        data: blog_data,
      });

  } catch (error) {
    res.status(400).send(error.message);
  }
};
const get_blogs_list = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send({
      statusCode: 200,
      statusMessage: "user data list",
      message: "Successfully created a user.",
      data: blogs,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
    post_blog,
    get_blogs_list,
};
