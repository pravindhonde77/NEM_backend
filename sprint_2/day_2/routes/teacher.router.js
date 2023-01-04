 const express=require("express")

 const teacherRouter=express.Router()

 teacherRouter.get("/",(req,res)=>{
res.send("All Tecahers")
 })

 teacherRouter.post("/addteachers",(req,res)=>{
    console.log(req.body);
    res.send("Added teacher")
 })

 module.exports={
    teacherRouter
 }
