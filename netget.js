var port=process.argv[2]||8001
var hostname=process.argv[3]||"cruithne"

var options = {
   port: port,
   host: hostname
   }

var net=require("net")
var con=net.connect(options,
   function(){
      con.write("the quick brown fox\n")
      }
   )
con.on("data",
   function(data){
      console.log(data.toString())
      con.end()
      }
   )
con.on("end",
   function(){
      console.log("disconnected")
      }
   )
con.on("error",
   function(e){
      console.log("error ["+e.message+"] ["+e.code+"]")
      }
   )