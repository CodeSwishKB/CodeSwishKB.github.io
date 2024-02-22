const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('input[type="submit"]');

const tbody = document.querySelector("tbody");
const bookForm = document.querySelector(".book-form");

const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");
const read = document.querySelector('input[name="read"]');

const inputs = [authorInput, titleInput, pagesInput]

const myLibrary = [];

addItemsBtn.addEventListener("click", () => {
	modal.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
	modal.style.visibility = "hidden";
});

function Book(author, title, numberOfPages, read) {
	this.author = author;
	this.title = title;
	this.numberOfPages = numberOfPages;
	this.read = read;
}

Book.prototype.toggleRead = function() {
	this.read = !this.read
}

function toggleRead(item) {
	myLibrary[item].toggleRead()
	showBooks()
}

function addToLibrary() {
	let newBook = new Book(authorInput.value, titleInput.value, pagesInput.value, read.checked);
	myLibrary.push(newBook);
	showBooks();

	bookForm.addEventListener("submit", validate)
	modal.style.visibility = "hidden";
}
addBook.addEventListener("click", addToLibrary);

function validate(e) {
	e.preventDefault();
	checkFields(inputs)
	clearForm()
}

function clearForm() {
	authorInput.value = ""
	titleInput.value = ""
	pagesInput.value = ""
}

function showBooks() {
	tbody.innerHTML = '';
	for (let i = 0; i < myLibrary.length; i++) {
		let template = `
    <tr>
      <td>${myLibrary[i].author}</td>
      <td>${myLibrary[i].title}</td>
      <td>${myLibrary[i].numberOfPages}</td>
      <td>
      <div class="read-or-not-flex">
        <p class="read-status">${myLibrary[i].read ? "Read" : "Not Yet"}</p>
          <div class="read-remove-btns">
            <button class="reads" onclick="toggleRead(${i})"><img style="width: 23px" src="assets/icons/book-check-outline.svg"></button>
            <button class="remove" onclick="removeBook(${i})"><img style="width: 23px" src="assets/icons/delete-outline.svg"></button>
          </div>
      </div>
      </td>
    </tr>
  `;
		tbody.innerHTML += template;
	}
}

function removeBook(index) {
	myLibrary.splice(index, 1)
	showBooks()
}

function showError(input, msg) {
	const formControl = input.parentElement;
	formControl.className = "form-info error";
	const small = formControl.querySelector("small");
	small.textContent = msg;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-info success";
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkFields(inputArr) {
	inputArr.forEach((input) => {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)} must put text`);
		} else {
			showSuccess(input);
		}
	});
}