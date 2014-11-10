var text=[]
var ends=0

function xcallback(x){
   return function(resp){
      text[x]=""
      resp.setEncoding("utf8")
      resp.on("data",
         function(data){
            //console.log(data)
            text[x]+=data
            }
         )
      resp.on("error",function(e){
         console.log("Error ["+x+"] "+e.message)
         })
      resp.on("end",function(){
         if(++ends==3) windup()
         })
      }
   }

function windup(){
   for(var i=2; i<=4; i++)
      console.log(text[i])
   }

http= require("http")

for(i=2; i<=4; i++)
   http.get(process.argv[i],xcallback(i)).
      on("error",function(e){
         console.log("Get error  ["+x+"] "+e.message)
         })
