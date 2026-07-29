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

