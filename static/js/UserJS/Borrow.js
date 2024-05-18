document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the book collection from local storage
    //or ekse an empty array if not found
    //conver to js
    let bookCollection = JSON.parse(localStorage.getItem('books')) || [];

    // Get the container where the book cards will be displayed
    const booksContainer = document.querySelector('.books');

    // Function to create a book card 
    //that will store all of our books 
    function createBookCard(book) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.bookId = book.id; // Associate book ID with the card in the obj
    
        // Book cover
        const coverImage = document.createElement('img');
        coverImage.src = book.coverImage;//from obj
        coverImage.alt = `Cover of ${book.title}`;
        coverImage.className = 'book-cover';
    
        // Book title 
        // a hyperlink
        const bookTitle = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.href = `../books/${book.title.replace(/\s/g, "_")}.html`; // Link book page
        titleLink.textContent = book.title; // Link text is the book's title
        bookTitle.appendChild(titleLink); // Append the link to the title h3(a())
    
        // Book author
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `By ${book.author}`;
        //+
    
        // Book category
        const bookCategory = document.createElement('p');
        bookCategory.textContent = `Category: ${book.category}`;
    
        // Borrow button
        const borrowButton = document.createElement('button');
        borrowButton.className = 'borrow-button';
        borrowButton.textContent = book.borrowed ? 'Borrowed' : 'Borrow';
        borrowButton.disabled = book.borrowed; // Disable if borrowed
    
        // Append elements to the book card after make it
        bookCard.append(coverImage, bookTitle, bookAuthor, bookCategory, borrowButton);
    
        return bookCard; // Return book card done 
    }
    
    // Create book cards for books in the collection
    bookCollection.forEach(book => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
    });

    // Add event listener to handle borrowing books
   // Add event listener to handle borrowing books
booksContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('borrow-button') && !event.target.disabled) {
        const bookCard = event.target.closest('.book-card'); // Find the closest book card
        const bookId = parseInt(bookCard.dataset.bookId, 10); // Get the book ID

        // Find the book in the collection using the ID
        const book = bookCollection.find(b => b.id === bookId);

        if (book && !book.borrowed) {
            // Change the borrowed status to true
            book.borrowed = true;

            // Save the updated book collection back to local storage
            localStorage.setItem('books', JSON.stringify(bookCollection));

            // Update the button text to reflect the borrowed status
            event.target.textContent = 'Borrowed';
            event.target.disabled = true; // Disable the button
            
            // Refresh the borrowed books page or navigate to it
            // Uncomment the following line to refresh the page:
            // window.location.reload();
            // Or navigate to the borrowed books page:
            // window.location.href = 'borrowed-books.html'; // Change to the correct URL
        }
    }
});

    
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchOptions = document.getElementById('search-options');
    const booksContainer = document.querySelector('.books');

    // Add event listeners to trigger the search when the input or options change
    searchInput.addEventListener('input', performSearch);
    searchOptions.addEventListener('change', performSearch);

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const searchOption = searchOptions.value;
        const bookCards = booksContainer.querySelectorAll('.book-card');

        let matchFound = false;

        bookCards.forEach((bookCard) => {
            const bookTitle = bookCard.querySelector('h3').textContent.toLowerCase();
            const bookAuthor = bookCard.querySelector('p').textContent.toLowerCase();
            const bookCategory = bookCard.querySelectorAll('p')[1].textContent.toLowerCase();
            // 1 cuz it's second element

            let match = false;

            switch (searchOption) {
                case 'title':
                    match = bookTitle.includes(searchTerm);
                    break;
                case 'author':
                    match = bookAuthor.includes(searchTerm);
                    break;
                case 'category':
                    match = bookCategory.includes(searchTerm);
                    break;
                case 'ALL':
                    match = bookTitle.includes(searchTerm) || bookAuthor.includes(searchTerm) || bookCategory.includes(searchTerm);
                    break;
            }

            if (match) {
                bookCard.style.display = 'block';
                matchFound = true;
            } else {
                bookCard.style.display = 'none';
            }
        });

        // Display "Match not found" message if no matches are found
        const matchNotFound = document.getElementById('match-not-found');
        matchNotFound.style.display = matchFound ? 'none' : 'block';
    }
});
