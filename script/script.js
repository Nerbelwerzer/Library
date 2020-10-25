const shelf = JSON.parse(localStorage.getItem("shelf")) || [];

const library = document.getElementById('library');
const addButton = document.getElementById('add-button');
const closeButton = document.getElementById('close-btn')
const modal = document.getElementById('formModal');
const bookForm = document.getElementById('form')
const delButton = document.getElementsByClassName('del-btn')

addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'
});

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

    shelf.push(book);
    localStorage.setItem("shelf", JSON.stringify(shelf));

    displayLibrary()
}

function displayLibrary() {
    library.innerHTML = ""

    for (let i = 0; i < shelf.length; i++) {

        let cardTemplate = 
        `<button class="del-btn" onclick="deleteBook(` + [i] + `)">X</button>` +
        `<p>${shelf[i].title}</p>` +
        `<p>By ${shelf[i].author}</p>` +
        `<p>${shelf[i].pages} pages</p>` +
        `<div><p>${shelf[i].read} <p><button class="tog-btn" onclick="markRead(` + [i] + `)">(toggle)</button> </p></div></p>`
    
        let bookCard = document.createElement('div');
    
        bookCard.setAttribute('class', 'book-card')
        bookCard.innerHTML = cardTemplate
        library.appendChild(bookCard);
    }
}

function deleteBook(index) {
    shelf.splice(index, 1);
    localStorage.setItem("shelf", JSON.stringify(shelf));
    displayLibrary();
}

function markRead(index) {
    if (shelf[index].read === "Read") {
        shelf[index].read = "Not yet read"
    }
    else {
        shelf[index].read = "Read"
    }

    localStorage.setItem("shelf", JSON.stringify(shelf));
    displayLibrary()
}

displayLibrary();





