http=require('http')
var port=process.argv[2]||8001
var hostname=process.argv[3]||"cruithne"
var path=process.argv[4]||""
var method=process.argv[5]||"POST"


var options = {
   hostname: hostname,
   port: port,
   path: path,
   method: method
   };
console.log(JSON.stringify(options))

var req = http.request(options, function(res) {
   console.log('STATUS: ' + res.statusCode);
   console.log('HEADERS: ' + JSON.stringify(res.headers));
   res.on('data', function (chunk) {
      console.log('BODY: ' + chunk.toString());
      });
   res.on('end', function(){
      console.log("END")
      })
   });

req.on('error', function(e) {
   console.log('problem with request: ' + e.message+" "+e.code);
   });

// write data to request body
//req.write('data\n');
//req.write('data\n');
req.end();