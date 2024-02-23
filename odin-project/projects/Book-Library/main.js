const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('.addBookBtn');

const tbody = document.querySelector("tbody");
const bookForm = document.querySelector(".book-form");

const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");
const read = document.querySelector('input[name="read"]');

const myLibrary = [];

addItemsBtn.addEventListener("click", () => {
	modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
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

	if((authorInput.value.trim() === "" || authorInput.value === null || authorInput.value === "") || (titleInput.value.trim() === "" || titleInput.value === null || titleInput.value === "") || (pagesInput.value.trim() === "" || pagesInput.value === null || pagesInput.value === "")){

		if (authorInput.value.trim() === "" || authorInput.value === null) {
			showError(authorInput, `**${getFieldName(authorInput)} must put `);
		} else {
			showSuccess(authorInput);
		}
	
		if (titleInput.value.trim() === "" || titleInput.value === null) {
			showError(titleInput, `**${getFieldName(titleInput)} must put `);
		}else {
			showSuccess(titleInput);
		}

		 if (pagesInput.value.trim() === "" || pagesInput.value === null) {
			showError(pagesInput, `**${getFieldName(pagesInput)} must put `);
		} else {
			showSuccess(pagesInput);
		}

	} else {
		myLibrary.push(newBook);
			showBooks();
			modal.style.display = "none";
			clearForm()
	}	
	bookForm.addEventListener("submit", (e) => {
		e.preventDefault();
	})
}
addBook.addEventListener("click", addToLibrary);

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
      <td><p>${myLibrary[i].author}</p></td>
      <td><p>${myLibrary[i].title}</p></td>
      <td>${myLibrary[i].numberOfPages}</td>
      <td>
      <div class="read-or-not-flex">
        <p class="read-status">${myLibrary[i].read ? "Read" : "Not Yet"}</p>
          <div class="read-remove-btns">
            <button class="read-not-btn reads" onclick="toggleRead(${i})"><img style="width: 23px" src="assets/icons/book-check-outline.svg"></button>
            <button class="read-not-btn remove" onclick="removeBook(${i})"><img style="width: 23px" src="assets/icons/delete-outline.svg"></button>
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
	small.textContent = ""
	small.textContent = msg;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-info success";
}

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}