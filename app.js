//Practies
console.log("Hello");
console.log(8+26);

const http=require("http");

//create server
http.createServer((request,response)=>{

    //Header
    response.writeHead(200,{'Content-Type':'text/plain'});

    //send response to client
    response.write("First Node.js Application");
    response.write("HTTP Module Example");
    response.end("");
    console.log("Response sent");
}).listen(8081);