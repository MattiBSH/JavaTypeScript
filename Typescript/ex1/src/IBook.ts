interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?:number;
}

function printBook(book:IBook){
    return "Author: "+book.author+" Title: "+book.title;
}
let book ={title:"Bobs eventyr",author:"Matti Hansen"};
console.log(printBook(book));