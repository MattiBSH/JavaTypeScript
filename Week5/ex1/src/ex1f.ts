let http = require("http");
let fetch1=require("node-fetch");
let IBook=require("./IBook");

function writeBook(IBook:{}){
    console.log(IBook);
}
console.log(writeBook(new IBook("ggg")));
