<<<<<<< HEAD
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
=======
const abc="hello";
const int=123;
console.log(abc,int);

//create server
const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write("<h1>Welcome to Node.js</h1>");
    res.write("<p>This is my first server.</p>");

    res.end("response ended");

}).listen(8080);

>>>>>>> b4ac7fbf525074c5cecac4715dd24dc60b3b32ad
