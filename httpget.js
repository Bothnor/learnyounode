console.log("arg=["+process.argv[2]+"]")
//require("http").get("http://cruithne:8001",
require("http").get(process.argv[2],
   function(resp){
      resp.setEncoding("utf8")
      resp.on("data",
         function(data){
            console.log(data)
            }
         )
      resp.on("error",function(e){
         console.log("Error (cbk) "+e.message)
         })
      resp.on("end",function(){
         //console.log("End")
         })
      }
   ).on("error",function(e){
         console.log("Error (get) "+e.message+" "+e.code)
         })
