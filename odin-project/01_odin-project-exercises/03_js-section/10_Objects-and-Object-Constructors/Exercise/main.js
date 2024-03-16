function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    );
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(theHobbit.info());

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'

// console.log(Object.getPrototypeOf(player1) === Player.prototype);
// console.log(Object.getPrototypeOf(player2) === Player.prototype);
// console.log(Object.getPrototypeOf(player2) === player1.prototype);

// console.log(player1.valueOf());
// console.log(player1.hasOwnProperty("valueOf")); // false
// console.log(Object.prototype.hasOwnProperty("valueOf"));
// console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));
