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

const authorInput = document.querySelector("#authorInput");
const titleInput = document.querySelector("#titleInput");
const pagesInput = document.querySelector("#pagesInput");
const readOrNotInput = document.querySelector('input[name="read"]');
const bookForm = document.querySelector(".book-form");

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

function addToLibrary() {
  let newBook = new Book(
    authorInput.value,
    titleInput.value,
    pagesInput.value,
    readOrNotInput.value
  );

  myLibrary.push(newBook);
  displayDetails(newBook);

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
  });

  modal.style.visibility = "hidden";
}

addBook.addEventListener("click", addToLibrary);

myLibrary.forEach((item) => {
  var x = item;
  console.log(x);
});

console.log(myLibrary);

// function showBooks() {
//   let template = `
//     <tr>
//       <td>${this.author}</td>
//       <td>${this.title}</td>
//       <td>${this.pagesInput}</td>
//       <td>${this.readOrNotInput}</td>
//   `;
//   myLibrary.forEach((book) => {
//     book.innerHTML += template;
//   });
// }

function displayDetails(newBook) {
  // myLibrary.forEach(book1 => {
  // })
  let author = newBook.author;
  let title = newBook.title;
  let numberOfPage = newBook.numberOfPages;
  let readOrNot = newBook.readOrNot;
  let newRow = tbody.insertRow(tableRow);
  let authorRow = newRow.insertCell(0);
  let titleRow = newRow.insertCell(1);
  let numberOfPageRow = newRow.insertCell(2);
  let readOrNotRow = newRow.insertCell(3);
  authorRow.textContent = author;
  titleRow.textContent = title;
  numberOfPageRow.textContent = numberOfPage;
  readOrNotRow.textContent = readOrNot;
  tableRow++;
}

// addToLibrary(book1);
// addToLibrary(book2);

// for (let key in book1) {
//   console.log(`${key}: ${book1[key]}`);
// }
