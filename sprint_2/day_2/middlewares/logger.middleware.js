const fs=require("fs")

const logger=(req,res,next)=>{
    //req.url=>route
    //req.method=> method
    //appendFileSync

    fs.appendFileSync("../logs.txt",`Route:${req.url} Method:${req.method}\n`)
    next()
}

module.exports={
    logger
}