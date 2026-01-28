/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/

      class Book{
           title;
           author;
           pages;
           isAvailable;


           constructor(title,author,pages,isAvailable){
            this.title=title;
            this.author=author;
            this.pages=pages;
            this.isAvailable=isAvailable;
           }
           borrow(){
            if(!this.isAvailable){   // if the book is already taken so we mention that already taken ;

                console.log(this.title,"already borrowed !");
            }
            this.isAvailable=false;
           }
           returnBook(){ 
            if(this.isAvailable){
                console.log(this.title ,"is in the library");
            }
            

           }
           getInfo(){
           console.log(this.title," book was written by",this.author,"in the pages of",this.pages);
           }
           isLongBook(){
        if(this.pages>300)console.log("the given book is A long book written by the :",this.author);
            
           }

      }
      let books = [
    new Book("Harry Potter", "J.K. Rowling", 350,true),
    new Book("1984", "George Orwell", 328),
    new Book("The Hobbit", "J.R.R. Tolkien", 310,false),
    new Book("The Alchemist", "Paulo Coelho", 208),
    new Book("Clean Code", "Robert C. Martin", 464)
];


     // b1.constructor("triyan","jai",101,true);
    

   //  i. Display info of all books
console.log("All books:");
books.forEach(book => {
    console.log(book.getInfo());
});
  

books[0].borrow();
books[2].borrow();
console.log(books[0].isAvailable);

books[0].borrow(); // Harry Potter
books[2].borrow(); // The Hobbit

    // ii. Borrow 2 books and show their availability status    
console.log("\nAfter borrowing 2 books:");
books.forEach(book => {
    console.log(book.title,"-> Available",book.isAvailable);
});


books[3].returnBook();

   // iii. Return 1 book and show updated status  
books.forEach(book=>{
  console.log(book.title,"-> Available",book.isAvailable);
});

   // iv. Count how many books are "long books" (more than 300 pages)   
 let count=0;
books.forEach(book=>{
    if(book.pages>300){
        count++;
    }
})


console.log("the no of book that has pages more than 300 pages:",count);


// v. List all available books
console.log("Available books:");

books.forEach(book=>{
    if(book.isAvailable){
        console.log("the book name  is: ",book.title);
    }
})