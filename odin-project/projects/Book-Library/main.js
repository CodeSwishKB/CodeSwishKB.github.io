const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('input[type="submit"]');

const tbody = document.querySelector("tbody");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const numberOfPage = document.querySelector("#numOfPage");
const readOrNot = document.querySelector("#readOrNot");
let tableRow = 0;

const myLibrary = [];

addItemsBtn.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

function Book(author, title, numberOfPages, readOrNot) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readOrNot = readOrNot;
}
const authorInput = document.querySelector("#authorInput");
const titleInput = document.querySelector("#titleInput");
const pagesInput = document.querySelector("#pagesInput");
const bookForm = document.querySelector(".book-form");

function addToLibrary() {
  const readOrNotInput = document.querySelector('input[name="read"]:checked');
  let newBook = new Book(
    authorInput.value,
    titleInput.value,
    pagesInput.value,
    readOrNotInput.value
  );

  myLibrary.push(newBook);
  showBooks(newBook);

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
  });

  modal.style.visibility = "hidden";
}

addBook.addEventListener("click", addToLibrary);

console.log(myLibrary);

function showBooks(newBook) {
  let template = `
    <tr>
      <td>${newBook.author}</td>
      <td>${newBook.title}</td>
      <td>${newBook.numberOfPages}</td>
      <td>${newBook.readOrNot}</td>
  `;

  tbody.innerHTML += template;
}
