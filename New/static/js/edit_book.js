// Function to edit a book by ID in local storage
function editBookById(bookId, updatedAttributes) {
  // Retrieve the "books" array from local storage
  const booksString = localStorage.getItem("books");
  const books = booksString ? JSON.parse(booksString) : [];

  // Find the index of the book with the specified ID
  const index = books.findIndex(book => book.id === bookId);

  if (index !== -1) {
    // If the book exists, update its attributes
    const existingBook = books[index];

    // Update the existing book with the new attributes
    const updatedBook = {
      ...existingBook,
      ...updatedAttributes
    };

    // Replace the book in the array
    books[index] = updatedBook;

    // Save the updated array back to local storage
    localStorage.setItem("books", JSON.stringify(books));

    return `Book with ID ${bookId} updated successfully!`;
  } else {
    return `Book with ID ${bookId} not found.`;
  }
}

// Attach an event listener to the edit form
document.querySelector('.addForm').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent the form from submitting normally

  // Retrieve the input values from the form
  const bookId = parseInt(document.getElementById('book_id').value);  // Book ID to be edited
  const newTitle = document.getElementById('new_title').value;  // New title for the book
  const newAuthor = document.getElementById('new_author').value;  // New author for the book
  const newDescription = document.getElementById('new_description').value;  // New genre for the book

  // Define the attributes to update
  const updatedAttributes = {
    title: newTitle,
    author: newAuthor,
    description: newDescription
  };

  // Call the function to edit the book by its ID
  const resultMessage = editBookById(bookId, updatedAttributes);

  // Provide feedback to the user
  alert(resultMessage);

  // Reset the form
  this.reset();
});
