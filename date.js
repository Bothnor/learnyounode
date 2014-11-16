var port=Number(process.argv[2]||8000)
var ol=require("ox").ol
ol("port ",port)

var server = require('net').createServer(
   {allowHalfOpen: true},
   function(c) { //'connection' listener
      console.log('server connected');
      c.on('end', function() {
         console.log('server disconnected');
         });
      //c.on('close',process.exit)
      //c.write("date\n")
      c.write((new Date()).toISOString().match(/(.*)T(.*):/).slice(1).join(" ")+"\n");
      c.end()
      c.on('error',function(e){
          //c.write("what?")
          ol("date-error "+e.message)
          })
      }
   );
server.listen(port, 
   function() { //'listening' listener
      console.log('server bound');
      }
   );