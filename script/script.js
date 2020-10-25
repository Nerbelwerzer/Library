const shelf = JSON.parse(localStorage.getItem("shelf")) || [];

const library = document.getElementById('library');
const addButton = document.getElementById('add-button');
const modal = document.getElementById('formModal');
const bookForm = document.getElementById('form')

addButton.addEventListener('click', () => {
    modal.style.display = 'block';
})

function Book() {
    this.tile = ""
    this.author = ""
    this.pages = ""
    this.read = ""
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
}


function createBook() {
    modal.style.display = 'none'

    let book = new Book;
    console.log(bookForm.author.value)
    book.title = bookForm.title.value;
    book.author = bookForm.author.value;
    book.pages = bookForm.pages.value;
    book.read = bookForm.read.value;


    const cardTemplate = 
    `<p>${book.title}</p>` +
    `<p>By ${book.author}</p>` +
    `<p>${book.pages} pages</p>` +
    `<p>${book.read}</p>`;

    const bookCard = document.createElement('div');

    bookCard.setAttribute('class', 'book-card')
    bookCard.innerHTML = cardTemplate
    library.appendChild(bookCard);
}






