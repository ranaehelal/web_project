document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the book collection from local storage
    const bookCollection = JSON.parse(localStorage.getItem('books')) || [];

    // Get the search input, search options, and the books container
    const searchInput = document.getElementById('search-input');
    const searchOptions = document.getElementById('search-options');
    const booksContainer = document.getElementById('book-list');

    // Function to create a book card
    function createBookCard(book) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const bookTitle = document.createElement('p');
        bookTitle.id = 'name';
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.id = 'author';
        bookAuthor.textContent = `By ${book.author}`;

        const bookCategory = document.createElement('p');
        bookCategory.id = 'type';
        bookCategory.textContent = `Category: ${book.category}`;

        bookCard.append(bookTitle, bookAuthor, bookCategory);

        return bookCard;
    }

    // Populate the book list
    bookCollection.forEach((book) => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
    });

    // Function to perform the search
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const searchOption = searchOptions.value;
        let matchFound = false;

        // Get all book cards from the container
        const bookCards = booksContainer.querySelectorAll('.book-card');
        
        bookCards.forEach((bookCard) => {
            // Initialize match status
            let match = false;

            const bookTitle = bookCard.querySelector('#name').textContent.toLowerCase();
            const bookAuthor = bookCard.querySelector('#author').textContent.toLowerCase();
            const bookCategory = bookCard.querySelector('#type').textContent.toLowerCase();

            // Match based on the selected search option
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

        // Show or hide the "match not found" message
        const matchNotFoundMessage = document.getElementById('match-not-found');
        matchNotFoundMessage.style.display = matchFound ? 'none' : 'block';
    }

    // Attach event listeners to trigger the search
    searchInput.addEventListener('input', performSearch);
    searchOptions.addEventListener('change', performSearch);
});
