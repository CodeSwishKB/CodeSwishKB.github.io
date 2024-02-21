const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('input[type="submit"]');

const tbody = document.querySelector("tbody");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const numberOfPage = document.querySelector("#numOfPage");
const readOrNot = document.querySelector("#readOrNot");


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

Book.prototype.toggleRead = function() {
  this.readOrNot = !this.readOrNot
}

function toggleRead(item){
  myLibrary[item].toggleRead()
  showBooks()
}

function addToLibrary() {
  const authorInput = document.querySelector("#authorInput").value;
  const titleInput = document.querySelector("#titleInput").value;
  const pagesInput = document.querySelector("#pagesInput").value;
  const readOrNotInput = document.querySelector('input[name="read"]').checked;
  let newBook = new Book(authorInput, titleInput, pagesInput, readOrNotInput);

  myLibrary.push(newBook);
  showBooks();

    bookForm.addEventListener("submit", e => {
      e.preventDefault();
      clearForm()
    })
  modal.style.visibility = "hidden";
  // console.log(myLibrary);

}
addBook.addEventListener("click", addToLibrary);

function clearForm(){
  authorInput.value = ""
  titleInput.value = "" 
  pagesInput.value = "" 
}

function showBooks() {
  tbody.innerHTML = ''; 
  myLibrary.forEach(item => {
    let template = `
    <tr>
      <td>${item.author}</td>
      <td>${item.title}</td>
      <td>${item.numberOfPages}</td>
      <td class="read-or-not-flex">${item.readOrNot}
        <div class="read-remove-btns">
          <p class="read-status">${item.readOrNot ? "Read" : "Not Yet"}</p>
          <button class="reads" onclick="toggleRead()">Read</button>
          <button class="remove" onclick="removeBook()">remove</button>
        </div>
      </td>
    </tr>
  `;
  tbody.innerHTML += template;
  })
}

function removeBook(index) {
  // let btn = document.querySelector(".remove");
  // let filteredBook = myLibrary.filter((book, index) => {
  //   if (item == book.idNum){
  //     myLibrary.splice(index, 1)
  //     showBooks()
  //   }
  // })
  myLibrary.splice(index, 1)
  showBooks()
 
}

// function reads(){
//   let readBtn = document.querySelector('.reads')
//   myLibrary.filter(item => {
//      if(item.readOrNot == "Not Yet" ){
//        item.readOrNot = "Read"
//        showBooks()
//       } else{
//         item.readOrNot = "Not Yet"
//         showBooks()
//       }
//     })
//     if(readBtn.textContent === "Read"){
//       readBtn.textContent = "Not Yet"
//     } else {
//       readBtn.textContent = "Read"
//     }
//    console.log(readBtn)
//  }