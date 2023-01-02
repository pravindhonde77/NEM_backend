const express=require("express")
const fs=require("fs")


const app=express();

app.use(express.json())



app.get("/",(req,res)=>{
    res.send("Hello World")
})




app.get("/allData",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    console.log(parsed_data)
    res.send("Data is in terminal")
})

app.get("/allstudents",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    console.log(parsed_data.student)
    res.send("You get student data terminal")
})

app.post("/addstudent",(req,res)=>{
    //reading the data first
    const data=fs.readFileSync("./db.json","utf-8")
    //Parsing the data to add a new student
    const parsed_data=JSON.parse(data)
    //adding the new student
    parsed_data.student.push(req.body)
    //write it in the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    res.send("database updated")
})

app.post("/addteacher",(req,res)=>{
    //reading the data first
    const data=fs.readFileSync("./db.json","utf-8")
    //Parsing the data to add a new student
    const parsed_data=JSON.parse(data)
    //adding the new student
    parsed_data.teacher.push(req.body)
    //write it in the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    res.send("database updated")
})


app.listen(3500,()=>{
    console.log("running at port 3500")
})