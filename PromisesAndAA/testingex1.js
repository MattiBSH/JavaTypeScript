const s = require("./ex1-crypto-module");
console.log(s.makeSkeleton());

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  let o = s.makeSkeleton();
  res.write(JSON.stringify(o)); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080


//todo make it return hex

async function testAwait() {
  const a = await s.myPromise(8);
  const b = await s.myPromise(16);
  const c = await s.myPromise(24);
  const d = await s.myPromise(32);
  const e = await s.myPromise(40);
   console.log(a, b, c, d, e);
}

function testPromises() {
  try {
    const a = s.myPromise(8);
    const b = s.myPromise(16);
    const c = s.myPromise(24);
    const d = s.myPromise(32);
    const e = s.myPromise(40);
    Promise.all([a, b, c, d, e]).then(x => console.log(x));
  } catch (error) {
    console.log(error);
  }


}
testPromises();
testAwait();