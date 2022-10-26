var http = require("http");
http.createServer(function(req,res){
    res.write(req.url);
    res.end();
}).listen(8081,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server started")
    }
})