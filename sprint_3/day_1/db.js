const mongoose = require("mongoose")


const main = async () => {

    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/school") //school db automaticall created
        console.log("Connected to the db")
        // await StudentModel.insertMany([{name:"Sumeet",age:26,city:"Mumbai",is_married:true}])

        const student= new StudentModel({
            name:"Priya",
            age:21,
            city:"Gujrat",
            is_married:true
        }) //student is a db which is created automatically 
        // this is used fo ronly single db

        await student.save()




         //*used for getting the data(db) in terminal */
        // const students=await StudentModel.find()
        // console.log(students);

      
        console.log("added")
        connection.disconnect()
        console.log("disconnected");

    } catch (err) {
        console.log("Cannot Connect")
        console.log(err);
     } 


}

main()

const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String, 
    is_married:Boolean
},{
    versionKey:false
}) //studentSchema is like that a mould

 
//use for strictly requred like in the form *

// const studentSchema=mongoose.Schema({
//     name:{type:String,required:true},
//     age:{type:Number,required:true},
//     city:{type:String,required:true}, 
//     is_married:{type:Boolean,required:true}
// },{
//     versionKey:false
// })

const StudentModel=mongoose.model("student",studentSchema) //student is a collection automatically created in school db
