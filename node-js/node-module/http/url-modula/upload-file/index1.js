var http = require("http");
http.createServer(function(req,res){
    res.write('<form action="fileupload" method="post">');
    res.write('<input type="file" name="fileupload">');
    res.write('<input type="submit" value="submit">');
    res.write('</from>');
    return res.end();
}).listen(7878,(err)=>{
    if(err){
    console.log(err);

    }
    else{
         console.log("server is running");
    }
})