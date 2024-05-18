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

        // Book Title with a link to the book page
        const titleCell = document.createElement('td');
        const titleLink = document.createElement('a');
        titleLink.href = `../books/${book.title.replace(/\s/g, "_")}.html`; // Link to book page
        titleLink.textContent = book.title;
        titleCell.appendChild(titleLink);
        row.appendChild(titleCell);

        // Author
        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        // Category
        const categoryCell = document.createElement('td');
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        // Status
        const statusCell = document.createElement('td');
        statusCell.textContent = book.status;

        // Apply the corresponding class to the status cell
        if (book.status === 'Available') {
            statusCell.classList.add('available');
        } else {
            statusCell.classList.add('notavailable');
        }

        row.appendChild(statusCell);

        // ID
        const idCell = document.createElement('td');
        idCell.textContent = book.id;
        row.appendChild(idCell);

        // Borrowed
        const borrowedCell = document.createElement('td');
        borrowedCell.textContent = book.borrowed ? 'Borrowed' : 'Not Borrowed';

        // Apply the corresponding class to the borrowed cell
        if (book.borrowed) {
            borrowedCell.classList.add('borrowed');
        } else {
            borrowedCell.classList.add('notBorrowed');
        }

        row.appendChild(borrowedCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
});
