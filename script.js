// Sample books in the library
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true }
];

// Function to render books on the page
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ""; // Clear existing content

  books.forEach(book => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Status:</strong> ${book.isAvailable ? "Available" : "Borrowed"}</p>
      <button class="borrow" ${book.isAvailable ? "" : "disabled"} onclick="borrowBook(${book.id})">Borrow</button>
      <button class="return" ${book.isAvailable ? "disabled" : ""} onclick="returnBook(${book.id})">Return</button>
    `;

    bookList.appendChild(bookDiv);
  });
}

// Function to handle borrowing a book
function borrowBook(bookId) {
  let book = books.find(book => book.id === bookId);
  if (book && book.isAvailable) {
    book.isAvailable = false;
    alert(`You have borrowed "${book.title}".`);
    displayBooks(); // Update the display after borrowing
  }
}

// Function to handle returning a book
function returnBook(bookId) {
  let book = books.find(book => book.id === bookId);
  if (book && !book.isAvailable) {
    book.isAvailable = true;
    alert(`You have returned "${book.title}".`);
    displayBooks(); // Update the display after returning
  }
}

// Function to add a new book
function addBook() {
  let title = document.getElementById("bookTitle").value.trim();
  let author = document.getElementById("bookAuthor").value.trim();
  let year = new Date().getFullYear(); // Default year to current year

  if (title === "" || author === "") {
    alert("Please enter both title and author.");
    return;
  }

  let newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1, // Generate unique ID
    title: title,
    author: author,
    year: year,
    isAvailable: true
  };

  books.push(newBook);
  alert(`"${title}" has been added to the library.`);
  displayBooks(); // Update book list

  // Clear input fields
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
}

// Initial display of books
displayBooks();

