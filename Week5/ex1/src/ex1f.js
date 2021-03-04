var http = require("http");
var fetch1 = require("node-fetch");
var IBook = require("./IBook");
function writeBook(IBook) {
    console.log(IBook);
}
console.log(writeBook(new IBook("ggg")));
