require("http").get(process.argv[2],
   function(resp){
      resp.setEncoding("utf8")
      resp.on("data",
         function(data){
            console.log(data)
            }
         )
      resp.on("error",function(e){
         console.log("Error "+e.message)
         })
      resp.on("end",function(){
         //console.log("End")
         })
      }
   ).on("error",function(e){
         console.log("Error "+e.message)
         })
