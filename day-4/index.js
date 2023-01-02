const http = require("http")
const fs = require("fs")


const server = http.createServer((request, response) => {
    // "/" Endpoint
    if (request.url === "/") {
        response.end("This is home  ")
    } else if (request.url === "/data") {
        fs.readFile("./data.json", (err, data) => {
            if (err) {
                response.write(err)
                response.end()
            } else {
                response.end(data)
            }
        })
    } else if (request.url === "/reports") {
        response.end("Reports will be here")
    }
})


server.listen(4500, () => {
    console.log("The server is running at port 4500")
})