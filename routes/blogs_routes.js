const express = require('express');
const router = express.Router();
const blogs_controller=require("../controller/blogs_controller");
// const reqFilter=require('../middle-wire/middle_wire');
// router.use(reqFilter);
router.post(  '/blog' ,blogs_controller.post_blog);
router.get(  '/blogsList' ,blogs_controller.get_blogs_list);
module.exports= router;