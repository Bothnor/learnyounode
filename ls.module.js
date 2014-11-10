// ls module: filter for files with given extension
// arg 1 - dir - directory path
// arg 2 - ext - extension to look for 
// arg 3 - callback expecting two args:
//    callback arg 1 - error code if there's an error
//    callback arg 2 - array of filenames with required extension
// returns given path, i.e. arg 1

module.exports=function(dir,ext,ret){
//   var path=require("path")
   require("fs").
      readdir(dir,
         function(e,list){
            if(e) return ret(e)
            ext=(ext==null)?"":"."+ext
            ret(null,list.filter(
               function(name){
                  return ext===require("path").extname(name)
                  }
               ))
            }
         )
   return dir
   }
