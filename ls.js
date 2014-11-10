var path=require("path")
require("fs").
   readdir(process.argv[2],
      function(e,list){
         if(e) throw(e)
         var ext=process.argv[3]?"."+process.argv[3]:""
         list.forEach(
            function(name){
               if(ext==path.extname(name))
                  console.log(name)
               }
            )
         }
      )
