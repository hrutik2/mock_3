const express=require("express")
require("dotenv").config()
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const { UserModel } = require("../Models/UserModel");
const { Auth } = require("../middleware/aurh");

const userRoutes=express.Router()

userRoutes.post("/register",async(req,res)=>{
    const {name,avatar ,email,password }=req.body
    try {
        const currentDate = new Date()
        const hash= await bcrypt.hash(password,4)
        const user=await UserModel.findOne({email})
        if(user){
            res.status(400).send({"message":"user already existed"})
        }
        else{
            const newUser =new UserModel ({ name, avatar, email, password:hash,created_at:currentDate,updated_at:currentDate})
            await newUser.save()
            res.status(201).send({"message":"new user Register successfully"})
        }
        
    } catch (error) {

        res.send(error)
    }
})
userRoutes.post("/login",async(req,res)=>{
    const { email, password } = req.body;
    
    try {
        const user=await UserModel.findOne({email})
        if(user){
            const validPassword = await  bcrypt.compare(password,user.password)
            if (!validPassword) {
                res.status(400).send({ "message": "Email or Password is incorrect"})
            }
            else{
               const token= jwt.sign({"mock":1},process.env.key)
               res.status(201).send({"message":"login successfully" ,"token":token})
            }
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports={userRoutes}