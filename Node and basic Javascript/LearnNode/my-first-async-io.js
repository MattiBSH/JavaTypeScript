var fs = require('fs')  

var file = process.argv[2]  
  
fs.readFile(file, function (error, contents) {  
  var lines = contents.toString().split('\n').length - 1  

  console.log(lines)  
})