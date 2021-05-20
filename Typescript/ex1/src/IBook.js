function printBook(book) {
    return "Author: " + book.author + " Title: " + book.title;
}
var book = { title: "Bobs eventyr", author: "Matti Hansen" };
console.log(printBook(book));
