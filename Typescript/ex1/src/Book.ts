class Book extends IBook {
    published?: Date;
    pages?:number;
    title: string="";
    readonly author: string="";
  }
  //is this what i was suppose to do
  let book1 = new Book();