// import the 
const http = require("http");
const server = http.createServer((req,res) =>{
    res.statusCode =200;
    res.setHeader("Content-Type","text/plain");
    res.end("welcome to the node.js trtorial");
});
server.listen(3000, () =>{
    console.log('server running at https://localhost:3000/');
});