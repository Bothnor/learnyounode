var port=process.argv[2]
var file=process.argv[3]
console.log("port="+port+" file="+file)
var fs=require("fs")
var stream=fs.createReadStream(file)
var http=require("http")
var server=http.createServer(svrcbk)
server.listen(port,"localhost")
var svrcbk=function(request,response){
   console.log("svrcbk")
   console.dir(request)
   console.dir(response)
   response.writeHead(200, {'Content-Type': 'text/plain'});
   //stream.pipe(response)
   response.write(stream)
   response.end('Hello World\n');
   }