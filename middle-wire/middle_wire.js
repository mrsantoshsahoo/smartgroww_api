const jwt=require("jsonwebtoken");
const secretKey="santoshkumar";
const reqFilter= async(req,resp,next)=>{
const userToken= req.headers["authorization"];
if(typeof userToken !== undefined){
    jwt.verify(userToken,secretKey,(error,authData)=>{
        if(error){
            resp.send({result:"Invalid Token"});
        }else{
            next();  
        }
    });
}else{
    console.log("error 2");
    resp.send({result:"Undefined Token"});
}
}

module.exports= reqFilter;