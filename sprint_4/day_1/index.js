const express = require("express")
// const { connection } = require("mongoose")
const { connection } = require("./config/db")
const { UserModel } = require("./models/User.model")
const jwt = require("jsonwebtoken")

//  


const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("WELCOME")
})

app.post("/register", async (req, res) => {
    const payload = req.body
    // console.log(payload)
    try {
        const user = new UserModel(payload)
        // console.log(user)
        await user.save()
        res.send("Registerd")

    } catch (err) {
        res.send("Error in registering the user")
        console.log(err);
    }

})

app.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.find({ email, pass })
        const token = jwt.sign({ course: 'backend' }, 'masai');
        if (user.length > 0) {
            res.send({ "msg": "Login Successfull", "token": token })
        } else {
            res.send("Wrong credential")
        }

    } catch (err) {
        res.send("Something went wrong")
        console.log(err);
    }

})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/data", (req, res) => {
    const token=req.headers.authorization;
    jwt.verify(token, 'masai', (err,decoded)=>{
        if(err){
            res.send("Invalid tokens")
            console.log(err)
        }else{
            res.send("Data...") 
        }    
    });
   
})

app.get("/cart", (req, res) => {
    const token=req.query.token;
    jwt.verify(token, 'masai', (err,decoded)=>{
        if(err){
            res.send("Invalid tokens")
            console.log(err)
        }else{
            res.send("CART PAGE") 
        }    
    });
})

app.get("/contact", (req, res) => {
    res.send("contacts page")
})


app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to the db");

    } catch (err) {
        console.log("Trouble connecting to the db  ")
        console.log(err)
    }
    console.log("running at 8080");
})