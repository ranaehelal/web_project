
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the book data from local storage
    const retrievedBooks = JSON.parse(localStorage.getItem('books'));

    // Reference to the table body
    const tableBody = document.querySelector('table tbody');

    // Ensure the table body exists before proceeding
    if (!tableBody) {
        console.error('Table body not found. Ensure your HTML has a <tbody> element.');
        return;
    }

    // Clear existing content in the table body
    tableBody.innerHTML = '';

    // Loop through the book list and populate the table
    retrievedBooks.forEach((book) => {
        const row = document.createElement('tr');

        // Book Name (with a hyperlink)
        const bookNameCell = document.createElement('td');
        bookNameCell.textContent = book.title;
        row.appendChild(bookNameCell);

        // ID
        const idCell = document.createElement('td');
        idCell.textContent = book.id;
        row.appendChild(idCell);


        // Author
        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        // Description - New column populated with book description
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.description;
        row.appendChild(descriptionCell);

        // Category
        const categoryCell = document.createElement('td');
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        // Status
        const statusCell = document.createElement('td');
        statusCell.textContent = book.status;
        row.appendChild(statusCell);

        // Borrowed
        const borrowedCell = document.createElement('td');
        borrowedCell.textContent = book.borrowed ? 'Borrowed' : 'Not Borrowed';
        row.appendChild(borrowedCell);


        // Append the row to the table body
        tableBody.appendChild(row);
    });
});
