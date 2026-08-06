//HTTP Module
//handle request, response
const http = require("http");

//create server
http.createServer((request,response)=>{

    //Header
    response.writeHead(200,{'content-Type':'text/HTML'});

    //send response to client
    response.write("First Node.js Application");
    response.write("<p>HTTP Module Example</p>");

    response.end("");
    console.log("Response Sent");
}).listen(8082);




//console.log("Hello");
//console.log(4+45);