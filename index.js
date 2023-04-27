const express =  require("express");
const cors =  require("cors");
const app= express();
const mongoose= require("mongoose");
const user_route=require("./routes/user_routes");
const blogs_route=require("./routes/blogs_routes");
const no_auth_route=require("./routes/no_auth");
// const uri= mongoose.connect("mongodb://127.0.0.1:27017/smart-groww"); 
const uri="mongodb+srv://mrsantoshsahoo07:YfGDigbYmabNHnVr@cluster0.4q3k5ee.mongodb.net/smart-groww";
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}); 
app.use(express.json());
app.use('/api',(user_route,blogs_route));
app.use('/noAuth/api',no_auth_route);   
const port=process.env.PORT||3001;
app.use(cors({
    origin: [port],
    credentials: true
}));
app.listen(port,function(){
    console.log("server ready  \n url http://localhost:3001");
});