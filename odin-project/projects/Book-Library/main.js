const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('input[type="submit"]');

const tbody = document.querySelector("tbody");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const numberOfPage = document.querySelector("#numOfPage");
const readOrNot = document.querySelector("#readOrNot");

const authorInput = document.querySelector("#authorInput");
const titleInput = document.querySelector("#titleInput");
const pagesInput = document.querySelector("#pagesInput");
const bookForm = document.querySelector(".book-form");

const myLibrary = [];

addItemsBtn.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

function Book(author, title, numberOfPages, readOrNot, idNum) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readOrNot = readOrNot;
  this.idNum = idNum 
}

let idNum = 0

function addToLibrary() {
  const readOrNotInput = document.querySelector('input[name="read"]:checked');
  let newBook = new Book(
    idNum = idNum + 1,
    authorInput.value,
    titleInput.value,
    pagesInput.value,
    readOrNotInput.value
  );

  myLibrary.push(newBook);
  showBooks();

    bookForm.addEventListener("submit", e => {
      e.preventDefault();
      clearForm()
    })
  modal.style.visibility = "hidden";
}
addBook.addEventListener("click", addToLibrary);
console.log(myLibrary);

function clearForm(){
  authorInput.value = ""
  titleInput.value = "" 
  pagesInput.value = "" 
}

function showBooks() {
  tbody.innerHTML = ''; 
  let sno = 0
  myLibrary.forEach(item => {
   sno = item + 1
    let template = `
    <tr>
      <td>${item.idNum}</td>
      <td>${item.author}</td>
      <td>${item.title}</td>
      <td>${item.numberOfPages}</td>
      <td>${item.readOrNot}<button class="remove" onclick="removeItem(item.idNum)">remove</button></td>
    </tr>
  `;
  tbody.innerHTML += template;
  })
}

function removeItem(item) {
  // let btn = document.querySelector(".remove");
  console.log(item)
  // item.closest("tr").remove();
}
