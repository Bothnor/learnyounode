// logs the files in the path arg-2 that have extension arg-3
var s=
   require('./ls.module')(process.argv[2],process.argv[3],
      function(e,list){
         if(e) throw(e)
         list.forEach(
            function(x){
               console.log(x)
               }
            )
         }
      )
   +" files"
// console.log(s) - commented out for learnyounode