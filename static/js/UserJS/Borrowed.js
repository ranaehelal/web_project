document.addEventListener("DOMContentLoaded", function() {
    // Get the book collection from local storage
    const bookCollection = JSON.parse(localStorage.getItem("books")) || [];

    // Find borrowed books
    const borrowedBooks = bookCollection.filter(book => book.borrowed);

    // Get the table body to insert borrowed book details
    const borrowedBooksList = document.getElementById("borrowed-books-list");

    // Get the message element for no borrowed books
    const noBooksMessage = document.getElementById("no-books-message");

    if (borrowedBooks.length === 0) {
        noBooksMessage.style.display = "block"; // Show message if no books are borrowed
    } else {
        borrowedBooks.forEach(book => {
            // Create a new row for the borrowed book
            const row = document.createElement("tr");

            // Book title cell with a link to the book page
            const titleCell = document.createElement("td");
            const titleLink = document.createElement("a");
            titleLink.href = `../books/${book.title.replace(/\s/g, "_")}.html`;
            titleLink.textContent = book.title;
            titleCell.appendChild(titleLink);

            // Author cell
            const authorCell = document.createElement("td");
            authorCell.textContent = book.author;

            // Borrow date cell (assuming it exists)
            const borrowDateCell = document.createElement("td");
            borrowDateCell.textContent = book.borrowDate || "Unknown"; // Default to "Unknown"

            // Return date cell
            const returnDateCell = document.createElement("td");
            returnDateCell.textContent = book.returnDate || "Not Returned"; // Default to "Not Returned"

            // Append the cells to the row
            row.appendChild(titleCell);
            row.appendChild(authorCell);
            row.appendChild(borrowDateCell);
            row.appendChild(returnDateCell);

            // Add the row to the table
            borrowedBooksList.appendChild(row);
        });
    }
});
