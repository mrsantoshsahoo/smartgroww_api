const express = require('express');
const routers = express.Router();
const user_controller=require("../controller/user_controller");
routers.post(  '/login' ,user_controller.register_user);
module.exports= routers;