const express=require("express")
const {studentRouter}=require("./routes/student.router")
const {teacherRouter}=require("./routes/teacher.router")


const app=express()

//school management system

app.use(express.json())

app.use("/students",studentRouter)
app.use("/teacher",teacherRouter)


app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.listen(3500,()=>{
    console.log("running at 3500")
})
