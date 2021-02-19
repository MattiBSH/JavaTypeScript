const fs = require('fs');
const util = require("util")
 
const readdir = util.promisify(fs.readdir);
 //omskriv denne til promises
function filterDir(path, ext, cb) {
  fs.readdir(path, (err, b) => {
    if (err) {
      cb(err)
    }
    const filtered = b.filter(f => f.endsWith(ext))
    cb(null, filtered);
  })
}

function filterDirMyPromise(path,ext){
   return new Promise((resolve,reject)=>{
       filterDir(path,ext,(err,files)=>{
        if(err){
            reject(err);
        }
        resolve(files)
       })
   })
}
 


function filterDirP(path, ext) {
  return readdir(path)
    .then(files => {
      const filtered = files.filter(f => f.endsWith(ext))
      return filtered;
    })
}
 
 
module.exports.filterDir = filterDir;
module.exports.filterDirP = filterDirP;
module.exports.filterDirMyPromise=filterDirMyPromise;

//export new function
