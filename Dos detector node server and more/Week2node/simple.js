//first test OS
var obj = require('./GettingOS');
console.log(obj);

//second test dos
var dos = require('./DosDetector');
const dd = new dos.module(22);
dd.addUrl("facebook.com");
dd.addUrl("facebook.com");

console.log(dd);