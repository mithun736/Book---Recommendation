document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;

    fetch('/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: bookTitle, author: bookAuthor })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        loadBooks();
    });
});

function loadBooks() {
    fetch('/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = '';
            data.forEach(book => {
                const li = document.createElement('li');
                li.textContent = `${book.title} by ${book.author}`;
                bookList.appendChild(li);
            });
        });
}

// Load books on page load
loadBooks();
