// Function to add a new book to the "books" array in local storage
function addBook(book) {
  const booksString = localStorage.getItem("books");
  const books = booksString ? JSON.parse(booksString) : [];
  
  books.push(book);
  
  localStorage.setItem("books", JSON.stringify(books));
}

// Attach an event listener to the form for adding a book
document.querySelector('.addForm').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent the form from submitting normally
  
  // Retrieve the input values
  const bookName = document.getElementById('BookName').value;
  const bookID = parseInt(document.getElementById('BookID').value);
  const bookAuthor = document.getElementById('BookAuthor').value;
  const bookCategory = document.getElementById('BookCat').value;
  const bookDescription = document.getElementById('BookDesc').value;
  const bookImagePath = document.getElementById('BookImage').value;  // Path or URL of the image
  
  // Create a new book object
  const newBook = {
    id: bookID,
    title: bookName,
    author: bookAuthor,
    category: bookCategory,
    description: bookDescription,
    coverImage: bookImagePath,  // Store the image path or URL
    status: "Available",
    borrowed: false
  };

  // Add the book to local storage
  addBook(newBook);

  console.log("Book added successfully!");

  // Clear the form after submission
  this.reset();
});



/*
*  i have made an html files and java script to for each functiolity
* as following : add book , delete book , edit book details
*  but the java script was based on local storage now i new the new java script files
* to work fine with the models databse for django sqlite
*  so tell me in steps what i have to do to accomplish this
*
* */