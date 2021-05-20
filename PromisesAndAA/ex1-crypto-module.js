const crypto = require('crypto');

function makeSkeleton(){
  let obj={"title": "6 Secure Randoms",randoms:[]}
  
  let arr =makeCrypt([48,40,32,24,16,8]);
  arr.forEach(element => {
    obj.randoms.push(element);
  });

return obj;
}

function makeCrypt(values){
  let hexArr=[];
  values.forEach(element => {
    let s =crypto.randomBytes(element/2).toString('hex');
    hexArr.push(s);
  });
 return hexArr; 
}



//a done never touching again wtf
//console.log(makeSkeleton());

//b starts here

const myPromise = (size) => new Promise(function (resolve, reject) {
    require('crypto').randomBytes(size/2, function(err, buffer) {
      if (err) {
        return reject(new Error("UPPPPPPPPS"))
      }
      let secureHex = buffer.toString('hex');
      resolve(secureHex);
});
})




//console.log(myPromise(2).then(x=>console.log(x)));
exports.makeSkeleton=makeSkeleton;
exports.myPromise=myPromise;