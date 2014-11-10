var port=Number(process.argv[2])
var file=process.argv[3]
console.log("port="+port+" file="+file)
var fs=require("fs")
var http=require("http")

var server=http.createServer(   
   function(request,response){
      console.log("svrcbk")
      //response.writeHead(200, {'Content-Type': 'text/plain'});
      var strm=fs.createReadStream(file)
      strm.pipe(response, { end: false })  //.pipe(process.stdout)
      strm.on("end", function(){
         process.stdout.write("done\n")
         response.end('Goodbye\n')
         })
      }
   )

server.listen(port,"localhost")
