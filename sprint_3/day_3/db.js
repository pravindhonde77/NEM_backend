const mongoose=require("mongoose")
require('dotenv').config()

const connection=mongoose.connect(process.env.mongoURL)


const heroSchema=mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villain:String,
    language:String,
    is_active:Boolean
})
 
const HeroModel=mongoose.model("hero",heroSchema)


module.exports={
    connection,
    HeroModel
}