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

//b starts here
const myPromise=new Promise(function makeSecureRandom(size){

});

exports.makeSkeleton=makeSkeleton;