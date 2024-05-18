document.addEventListener('DOMContentLoaded', function() {
    // Access the search input and option
    const searchInput = document.getElementById('search-input');
    const searchOptions = document.getElementById('search-options');

    // Add event listener to the search input field
    searchInput.addEventListener('input', performSearch);
    // Add event listener to the search options select element
    searchOptions.addEventListener('change', performSearch);

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const searchOption = searchOptions.value;
        let matchFound = false;

        // Save all books
        const books = document.querySelectorAll('.book');
        books.forEach(function(book){
            // Initialize match status to false
            let match = false;

            // Get the text content of name, author, and type elements of the book
            const name = book.querySelector('.name').textContent.toLowerCase(); // Changed ID to class
            const author = book.querySelector('.author').textContent.toLowerCase(); // Changed ID to class
            const type = book.querySelector('.type').textContent.toLowerCase(); // Changed ID to class

            // Search by option
            switch (searchOption) {
                case 'title':
                    match = name.includes(searchTerm);
                    break;
                case 'author':
                    match = author.includes(searchTerm);
                    break;
                case 'category':
                    match = type.includes(searchTerm);
                    break;
                case 'ALL':
                    match = name.includes(searchTerm) || author.includes(searchTerm) || type.includes(searchTerm);
                    break;
            }
            if (match) {
                book.style.display = 'block'; // Make it appear
                matchFound = true; // Set match found to true
            } else {
                book.style.display = 'none'; // Hide it
            }
        });
    }
});
