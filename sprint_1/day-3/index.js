const fs = require("fs")




// try{
//     fs.writeFileSync("./lecture.txt", "This is my secound projrct")
//     console.log("data has been enterded")
// }catch (err) {
//     console.log(err)
// }


// try{
//     fs.appendFile("./lecture.txt","This is my third project")
//     console.log("appeneded");
// }catch(err){
//   console.log(err)
// }

fs.appendFile("./lecture.txt","This is my third project",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("appended ");
    }
})

