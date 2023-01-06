const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/superheroDB")


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