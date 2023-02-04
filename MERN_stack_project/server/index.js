const {Route} =require("./routes/route")

const express=require("express")
const {connection}=require("./database/db")
const cors=require("cors")
require('dotenv').config()

const app=express()


app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"*"
}))


app.use("/",Route)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to DB");

    }catch(err){
        console.log("trouble connecting to DB")
        console.log(err);
    }

    console.log("your run sucessfully at 8080")
})