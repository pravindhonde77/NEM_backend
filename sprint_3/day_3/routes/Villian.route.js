const express = require("express")
const {VillianModel}=require("../models/Villian.model")

const villianRouter=express.Router()



villianRouter.get("/", async (req, res) => {
    let query = req.query
    try {
        const villians = await VillianModel.find(query)
        res.send(villians)
    } catch (err) {
        console.log(err)
        res.send({ "err": "Something went wrong" })

    }

})




villianRouter.post("/add", async (req, res) => {

    const data = req.body

    try {
        const villian = new VillianModel(data)
        await villian.save()
        console.log(villian)
        res.send("Added the villian")
    } catch (err) {
        console.log(err) 
        res.send({ "err": "Something went wrong" })
    }

})

module.exports={
    villianRouter  
}