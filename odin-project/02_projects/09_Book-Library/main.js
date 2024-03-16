const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('.addBookBtn');

const tbody = document.querySelector("tbody");
const bookForm = document.querySelector(".book-form");

addItemsBtn.addEventListener("click", () => {
	modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

class Book {
	constructor(author, title, numberOfPages, read) {
		this.author = author;
		this.title = title;
		this.numberOfPages = numberOfPages
		this.read = read
	}

	toggleRead() {
		this.read = !this.read
	}
}

function toggleRead(item) {
	library.myLibrary[item].toggleRead()
	library.showBooks()
}

function removeBook(index) {
	library.myLibrary.splice(index, 1)
	library.showBooks()
}

class Library {
	constructor() {
		this.myLibrary = []
	}

	pushNewBook(newBook) {
		this.myLibrary.push(newBook)
	}

	clearForm(author, title, pages) {
		author.value = ""
		title.value = ""
		pages.value = ""
	}

	showBooks() {
		tbody.innerHTML = '';
		for (let i = 0; i < this.myLibrary.length; i++) {
			let template = `
		<tr>
		  <td><p>${this.myLibrary[i].author}</p></td>
		  <td><p>${this.myLibrary[i].title}</p></td>
		  <td>${this.myLibrary[i].numberOfPages}</td>
		  <td>
		  <div class="read-or-not-flex">
			<p class="read-status">${this.myLibrary[i].read ? "Read" : "Not Yet"}</p>
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

	showError(input, msg) {
		const formControl = input.parentElement;
		formControl.className = "form-info error";
		const small = formControl.querySelector("small");
		small.textContent = ""
		small.textContent = msg;
	}

	showSuccess(input) {
		const formControl = input.parentElement;
		formControl.className = "form-info success";
	}

	getFieldName(input) {
		return input.id.charAt(0).toUpperCase() + input.id.slice(1);
	}
}

let library = new Library()

bookForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const authorInput = document.querySelector("#author");
	const titleInput = document.querySelector("#title");
	const pagesInput = document.querySelector("#pages");
	const read = document.querySelector('input[name="read"]');

	let newBook = new Book(authorInput.value, titleInput.value, pagesInput.value, read.checked);

	if ((authorInput.value.trim() === "" || authorInput.value === null || authorInput.value === "") || (titleInput.value.trim() === "" || titleInput.value === null || titleInput.value === "") || (pagesInput.value.trim() === "" || pagesInput.value === null || pagesInput.value === "")) {

		if (authorInput.value.trim() === "" || authorInput.value === null) {
			library.showError(authorInput, `**${library.getFieldName(authorInput)} must put `);
		} else {
			library.showSuccess(authorInput);
		}

		if (titleInput.value.trim() === "" || titleInput.value === null) {
			library.showError(titleInput, `**${library.getFieldName(titleInput)} must put `);
		} else {
			library.showSuccess(titleInput);
		}

		if (pagesInput.value.trim() === "" || pagesInput.value === null) {
			showError(pagesInput, `**${library.getFieldName(pagesInput)} must put `);
		} else {
			library.showSuccess(pagesInput);
		}

	} else {
		library.pushNewBook(newBook);
		library.showBooks(library);
		modal.style.display = "none";
		library.clearForm(authorInput, titleInput, pagesInput)
		console.log(library)
	}

})