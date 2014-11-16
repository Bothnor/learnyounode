var port=Number(process.argv[2]||8000)
var http=require("http")

var server=http.createServer(   
   function(request,response){
      console.log("svrcbk")
      //response.writeHead(200, {'Content-Type': 'text/plain'});
      console.log('STATUS: ' + request.statusCode);
      console.log('HEADERS: ' + JSON.stringify(request.headers));
      console.log('URL: ' + JSON.stringify(request.url));
      var upper=require("through2-map")(
         function(chunk){
            return chunk.toString().toUpperCase()
            })
      request.pipe(upper).pipe(response, { end: false })  //.pipe(process.stdout)
      request.on("end", function(){
         process.stdout.write("done\n")
         //response.end('Goodbye\n')
         response.end()
         })
      }
   )

server.listen(port,"localhost")