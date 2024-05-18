// Function to remove a book from local storage by ID
function removeBookById(bookId) {
    // Retrieve the "books" array from local storage
    const booksString = localStorage.getItem("books");
    const books = booksString ? JSON.parse(booksString) : [];
  
    // Find the index of the book with the given ID
    const index = books.findIndex(book => book.id === bookId);
  
    if (index !== -1) {
      // If the book exists, remove it
      books.splice(index, 1);
  
      // Update the local storage with the modified "books" array
      localStorage.setItem("books", JSON.stringify(books));
  
      return `Book with ID ${bookId} removed successfully!`;
    } else {
      return `Book with ID ${bookId} not found.`;
    }
  }
  
  // Attach an event listener to the form to delete a book
  document.querySelector('.addForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting normally
  
    // Retrieve the input value from the form
    const bookIdOrName = document.getElementById('book_id').value;
  
    // Try to parse the input as an integer for ID-based removal
    const bookId = parseInt(bookIdOrName);
  
    let resultMessage;
  
    if (isNaN(bookId)) {
      // If the input is not a valid ID, handle name-based removal or error
      resultMessage = "Please enter a valid book ID to delete.";
    } else {
      // Use the `removeBookById` function to remove the book by ID
      resultMessage = removeBookById(bookId);

        console.log("Book deleted successfully!");
    }
  
    // Provide feedback to the user
    alert(resultMessage);  // You can replace this with more advanced feedback handling, if desired
  
    // Reset the form
    this.reset();
  });
  