const http = require("http")
const fs = require("fs")


const server = http.createServer((request, response) => {
    // "/" Endpoint
    if (request.url === "/") {
        response.end("This is home  ")
    } 
    else if (request.url === "/data") {
        fs.readFile("./data.json", (err, data) => {
            if (err) {
                response.write(err)
                response.end()
            } else {
                response.end(data)
            }
        })
    } 
    else if (request.url === "/addDetail" && request.method==="POST") {
        //Somelogic to get the data
        let str=""
        request.on("data",(packet)=>{
            str+=packet
        })
        request.on("end",()=>{
            console.log(str)
        })
        console.log(str);
        response.end("Data has been enterded")
    } 

    else if (request.url === "/reports") {
        response.setHeader("Content-type","text/html")
        response.end("<h2>Reports will be here</h2>")
    }
    else{
        response.end("Invalid ENd Point")
    }
})


server.listen(4500, () => {
    console.log("The server is running at port 4500")
})