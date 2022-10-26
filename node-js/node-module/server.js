var http = require("http");
var dt   = require("./index");
http.createServer((req,res)=>{
    res.write("time is"+dt.mydate());
    res.end();
}).listen(8080);