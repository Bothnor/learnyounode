require("fs").
   readFile(process.argv[2],"utf8",
      function(e,s){
         if(e) throw(e)
         process.stdout.write((s.split("\n").length-1).toString()+"\n")
         }
      )   
