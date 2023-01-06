const express = require("express")
const { connection, HeroModel } = require("./db")

const app = express()
app.use(express.json())




app.get("/", (req, res) => {
    res.send("Welcome")
})


app.get("/heroes", async (req, res) => {
    let query = req.query
    try {
        const heroes = await HeroModel.find(query)
        res.send(heroes)
    } catch (err) {
        console.log(err)
        res.send({ "err": "Something went wrong" })

    }

})

app.post("/addhero", async (req, res) => {

    const data = req.body

    try {
        const hero = new HeroModel(data)
        await hero.save()
        console.log(hero)
        res.send("Added the hero")
    } catch (err) {
        console.log(err)
        res.send({ "err": "Something went wrong" })
    }

})

app.patch("/edithero/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
        await HeroModel.findByIdAndUpdate({_id:ID},payload)
        res.send(`update the hero data whoes id is ${ID}`)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

app.delete("/edithero/:id",async(req,res)=>{
    const ID=req.params.id
  
    try{
        await HeroModel.findByIdAndDelete({_id:ID})
        res.send(`deleted the hero data whoes id is ${ID}`)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})







app.listen(4500, async () => {

    try {
        await connection
        console.log("Connected to DB")

    } catch (err) {
        console.log("Error while connecting to DB");
        console.log(err)
    }
    console.log("server is running at port 4500");

})