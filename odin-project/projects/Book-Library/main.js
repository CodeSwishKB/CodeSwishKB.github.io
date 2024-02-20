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

function addToLibrary() {
  const readOrNotInput = document.querySelector('input[name="read"]:checked');
  let id = myLibrary.length + 1
  let newBook = new Book(
    authorInput.value,
    titleInput.value,
    pagesInput.value,
    readOrNotInput.value,
    id,
  );

  myLibrary.push(newBook);
  showBooks();

    bookForm.addEventListener("submit", e => {
      e.preventDefault();
      clearForm()
    })
  modal.style.visibility = "hidden";
  console.log(myLibrary);

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
      <td>${item.readOrNot}
        <div class="read-remove-btns">
          <button class="reads" onclick="reads(this)">Read</button>
          <button class="remove" onclick="removeItem(${item.idNum})">remove</button>
        </div>
      </td>
    </tr>
  `;
  tbody.innerHTML += template;
  })
}

function removeItem(item) {
  // let btn = document.querySelector(".remove");
  let filteredBook = myLibrary.filter((a, i) => {
    if (item == a.idNum){
      myLibrary.splice(i, 1)
      showBooks()
    }
  })
  console.log(item)
  console.log(myLibrary);
}

function reads(button){
 myLibrary.filter(item => {
     if(item.readOrNot == "Not Yet" ){
       item.readOrNot = "Read"
       console.log(item)
      } else{
        item.readOrNot = "Not Yet"
      }
    })
    
    if(button.textContent == "Read"){
      button.innerHTML = "Not Yet"
    } else {
      button.innerHTML = "Read"
    }
    showBooks()
    
   console.log(myLibrary)
 }