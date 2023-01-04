const express = require("express")
const app = express()
const fs = require("fs")
// const {timelogger}=require("./middlewares/timeLogger.middleware")
// const {watchman}=require("./middlewares/watchMan.middleWare")
 const {logger}=require("./middlewares/logger.middleware")
 const {addRoll}=require("./middlewares/addStamp.middleware")


//  app.use(watchman)
//  app.use(timelogger) 
app.use(express.json())
app.use(logger)
app.use(addRoll)

app.get("/", (req, res) => {
    console.log("Welcome page")
    res.send("Welcome")
})

app.get("/contacts", (req, res) => {
    console.log("Contact page")
    res.send("Contact Page ")
})

app.get("/about", (req, res) => {
    console.log("about page")
    res.send("About Page")
})

app.post("/newstudent",(req,res)=>{
    console.log(req.body)
    res.send("new student has been added")
})


app.get("/data", (req, res) => {
    const data = fs.readFileSync("./dummy.txt", "utf-8")
    res.send(data)
})

app.listen(4500, () => {
    console.log("running at 4500");
})