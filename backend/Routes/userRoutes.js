const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { UserModel } = require("../Models/user.model")
const UserRouter=express.Router()


UserRouter.get("/",(req,res)=>{
    res.send("Welcome To the System.")
})

UserRouter.post("/register",async(req,res)=>{
    let data=req.body
    let possible=await UserModel.find({email:data.email})
    if(possible.length===0){
        bcrypt.hash(data.pwd,2,async(err,new_pwd)=>{
            if(err){
                console.log(err)
            }else{
                let user=new UserModel({...data,pwd:new_pwd})
                await user.save()
                res.send("Registered Successfully.")
            }
        })
    }else{
        res.send("Already exist.")
    }
})

UserRouter.patch("/login",async(req,res)=>{
    let data=req.body
    let possible=await UserModel.find({email:data.email})
    if(possible.length!=0){
        bcrypt.compare(data.pwd,possible[0].pwd,(err,result)=>{
            if(result){
                let token=jwt.sign({userID:possible[0]._id},"pococare",{ expiresIn: "1h" })
                res.send({data:possible,token})
            }else{
                res.send("Wrong Credentials.")
            }
        })
    }else{
        res.send("No Such User Exist.")
    }
})




module.exports={
    UserRouter
}