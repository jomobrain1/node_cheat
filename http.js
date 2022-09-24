// ==============HTTP SERVER=================

var http= require("http")
var server=http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('This text will appear when you open http://localhost:3000/ in the browser');
  

})


server.listen(3000,'localhost',()=>{
    console.log('listening to port 3000');
})