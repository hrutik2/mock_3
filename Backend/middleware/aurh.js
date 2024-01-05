const jwt=require("jsonwebtoken")
require("dotenv").config()
const Auth= async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    try {
        jwt.verify(token, process.env.key, (err, decoded)=> {
            if(err){
                res.send({"message":"Invalid Token"})
            }
            else{
                next()
            }
          })
       
    } catch (error) {
        res.send(error)
    }
}
module.exports={Auth}