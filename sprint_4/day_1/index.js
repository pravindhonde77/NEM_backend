const express = require("express")
// const { connection } = require("mongoose")
const { connection } = require("./config/db")
const { UserModel } = require("./models/User.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")




const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("WELCOME")
})

app.post("/register", async (req, res) => {
    const { email, pass, name, age } = req.body
    // console.log(payload)
    try {

        bcrypt.hash(pass, 5, async (err, secure_password) => {
            if (err) {
                console.log(err);
            } else {
                const user = new UserModel({ email, pass: secure_password, name, age })
                // console.log(user)
                await user.save()
                res.send("Registerd")

            }
        });




    } catch (err) {
        res.send("Error in registering the user")
        console.log(err);
    }

})

app.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.find({ email })
        // console.log(user);




        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: 'backend' }, 'masai');
                    // console.log(token)
                    res.send({"msg":"Login Successfully","token":token})
                }else{
                    res.send("Wrong password")
                }
            });
           
        } else {
            res.send("Wrong credential")
        }

    } catch (err) {
        res.send("Something went wrong")
        console.log(err);
    }

})



app.get("/data", (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, 'masai', (err, decoded) => {
        if (err) {
            res.send("Invalid tokens")
            console.log(err)
        } else {
            res.send("Data...")
        }
    });

})

app.get("/cart", (req, res) => {
    const token = req.query.token;
    jwt.verify(token, 'masai', (err, decoded) => {
        if (err) {
            res.send("Invalid tokens")
            console.log(err)
        } else {
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