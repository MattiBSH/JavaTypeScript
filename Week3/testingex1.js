const s=require("./ex1-crypto-module");
console.log(s.makeSkeleton());

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
   let o= s.makeSkeleton();
  res.write(JSON.stringify(o)); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080


//todo make it return hex