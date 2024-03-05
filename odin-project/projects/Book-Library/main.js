class Book {
	constructor(
		author,
		title,
		numberOfPages,
		read
	) {
		this.author = author;
		this.title = title;
		this.numberOfPages = numberOfPages;
		this.read = read;
	
	}

	toggleRead() {
		this.read = !this.read
	}

	addToLibrary() {
		if ((this.author.trim() === "" || this.author === null || this.author === "") || (this.title.trim() === "" || this.title === null || this.title === "") || (this.numberOfPages.trim() === "" || this.numberOfPages === null || this.numberOfPages === "")) {

			if (this.author.trim() === "" || this.author === null) {
				this.showError(this.author );
			} else {
				this.showSuccess(this.author);
			}
			
			if (this.title.trim() === "" || this.title === null) {
				this.showError(this.title );
			} else {
				this.showSuccess(this.title);
			}

			if (this.numberOfPages.trim() === "" || this.numberOfPages === null) {
				this.showError(this.numberOfPages );
			} else {
				this.showSuccess(this.numberOfPages);
			}

		} else {
			myLibrary.push(book);
			this.showBooks();
			modal.style.display = "none";
			this.clearForm()
		}
		bookForm.addEventListener("submit", (e) => {
			e.preventDefault();
		})
		
	}
	
	clearForm(){
		this.author = ""
		this.title = ""
		this.numberOfPages = ""
		this.read = ""
	}

	showBooks(){
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

	removeBook(index){
		myLibrary.splice(index, 1)
		this.showBooks()
	}

	showError(input, msg){
		const formControl = input.parentElement;
		formControl.className = "form-info error";
		const small = formControl.querySelector("small");
		small.textContent = ""
		small.textContent = msg;
	}

	showSuccess(input){
		const formControl = input.parentElement;
		formControl.className = "form-info success";
	}

	getFieldName(input){
		return input.id.charAt(0).toUpperCase() + input.id.slice(1);
	}

}

const addItemsBtn = document.querySelector("#addBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const addBook = document.querySelector('.addBookBtn');

const tbody = document.querySelector("tbody");
const bookForm = document.querySelector(".book-form");

const authorInput = document.querySelector("#author").value;
const titleInput = document.querySelector("#title").value;
const pagesInput = document.querySelector("#pages").value;
const read = document.querySelector('input[name="read"]').checked;

const myLibrary = [];

addItemsBtn.addEventListener("click", () => {
	modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

let book = new Book(authorInput, titleInput, pagesInput, read)
addBook.addEventListener("click", book.addToLibrary());