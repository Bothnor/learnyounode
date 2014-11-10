require("http").get(process.argv[2],
   function(resp){
      text=""
      resp.setEncoding("utf8")
      resp.on("data",
         function(data){
            //console.log(data)
            text+=data
            }
         )
      resp.on("error",function(e){
         console.log("Error "+e.message)
         })
      resp.on("end",function(){
         console.log(text.length)
         console.log(text)
         })
      }
   ).on("error",function(e){
         console.log("Error "+e.message)
         })
