const express=require("express")

const Route=express.Router()

Route.post("/todos",(req,res)=>{
    console.log(req.body);
    res.send("done")
})

module.exports={
    Route
}