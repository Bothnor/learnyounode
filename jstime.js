var port=Number(process.argv[2]||8000)
var http=require("http")
var purl=require("url").parse
var path=require("path")

var server=http.createServer(   
   function(request,response){
      //console.log("svrcbk")
      //console.log('STATUS: ' + request.statusCode);
      //console.log('HEADERS: ' + JSON.stringify(request.headers));
      //console.log('URL: ' + JSON.stringify(request.url));
      var r=purl(request.url,true)
      var dir=path.dirname(r.pathname)
      var base=path.basename(r.pathname)
      //console.log("pathname="+r.pathname)
      //console.log("dir="+dir)
      //console.log("base="+base)
      //console.log("iso="+r.query.iso)
      var date=new Date(r.query.iso)
      var time={
         "hour":date.getHours(),
         "minute":date.getMinutes(),
         "second":date.getSeconds()
         }
      var utime={"unixtime":date.valueOf()}
      //process.stdout.write("done\n")
      response.writeHead(200, {'Content-Type': 'application/json'});
      var string
      switch(base){
         case "parsetime": string=JSON.stringify(time) //,null,"  ")
             break
         case "unixtime": string=JSON.stringify(utime)
             break
         default: string="error"
             break
         }
      //console.log(string)
      response.end(string)
      }
   )

server.listen(port)