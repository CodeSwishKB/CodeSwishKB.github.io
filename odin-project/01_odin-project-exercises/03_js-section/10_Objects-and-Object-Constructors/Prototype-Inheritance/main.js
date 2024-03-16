// ************* TASKS **************
// Working with prototype
// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?
// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };
// alert( rabbit.jumps ); // ? (1) => true
// delete rabbit.jumps;
// alert( rabbit.jumps ); // ? (2) => null
// delete animal.jumps;
// alert( rabbit.jumps ); // ? (3) => undefined
// There should be 3 answers.

// Searching algorithm
// The task has two parts.
// Given the following objects:
// let head = {
//   glasses: 1
// };
// let table = {
//   pen: 3
// };
// let bed = {
//   sheet: 1,
//   pillow: 2
// };
// let pockets = {
//   money: 2000
// };
// 1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// 2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. => head.glasses because it is his own property
let head = {
  glasses: 1,
};
// Object.setPrototypeOf(head, pockets);
let table = {
  pen: 3,
};
Object.setPrototypeOf(table, head);
let bed = {
  sheet: 1,
  pillow: 2,
};
Object.setPrototypeOf(bed, table);
let pockets = {
  money: 2000,
};
Object.setPrototypeOf(pockets, bed);
// console.log(pockets.glasses);
// console.log(head.glasses);

// Where does it write?
// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit? => rabbit, because "this" is an object before the dot, so rabbit.eat() modifies rabbit.
// let animal = {
//   eat() {
//     this.full = true;
//   }
// };
// let rabbit = {
//   __proto__: animal
// };
// rabbit.eat();

// Why are both hamsters full?
// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?
// let hamster = {
//   stomach: [],
//   eat(food) {
//     this.stomach.push(food);
//   }
// };
// let speedy = {
//   __proto__: hamster
// };
// let lazy = {
//   __proto__: hamster
// };
// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = food;
  },
};
let speedy = {
  name: "Speedy",
};
Object.setPrototypeOf(speedy, hamster);
let lazy = {
  name: "Lazy",
};
Object.setPrototypeOf(lazy, hamster);
speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);
