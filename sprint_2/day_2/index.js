const express = require("express")
const app = express()
const fs = require("fs")
const {timelogger}=require("./middlewares/timeLogger.middleware")
const {watchman}=require("./middlewares/watchMan.middleWare")




//  app.use(watchman)
 app.use(timelogger) 

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


app.get("/data", (req, res) => {
    const data = fs.readFileSync("./dummy.txt", "utf-8")
    res.send(data)
})

app.listen(4500, () => {
    console.log("running at 4500");
})