const mongoose = require("mongoose")



require('dotenv').config()




// mongoose.connect(mongoDB_url,{})



const connection = mongoose.connect(process.env.mongoDB_url)

module.exports={
    connection
}