const express=require("express")
const {connection}=require("./configs/db")
const {userRouter}=require("./routes/User.route")
const {noteRouter}=require("./routes/Note.route")
const {authenticate}=require("./middlewares/authenticate.middleware")


const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)
    }
    console.log("running at 8080")
})



