// CHAPTER 1: PRIMITIVES AND REFERENCES
// console.log(typeof "Nicholas"); // "string"
// console.log(typeof 10); // "number"
// console.log(typeof 5.1); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object"
// console.log(true === null); // "object"

// var name = "Nicholas";
// var lowercaseName = name.toLowerCase(); // convert to lowercase
// var firstLetter = name.charAt(0); // get first character
// var middleOfName = name.substring(2, 5);
// console.log(middleOfName);

// var object1 = new Object();
// var object2 = object1;
// object1.myCustomProperty = "Awesome!";
// console.log(object1);
// console.log(object2.myCustomProperty);

// function reflect(value) {
//   return value;
// }
// console.log(typeof reflect);

// CHAPTER 2: FUNCTIONS
// function sayNameForAll() {
//   console.log(this.name);
// }
// var person1 = {
//   name: "Nicholas",
//   sayName: sayNameForAll,
// };
// var person2 = {
//   name: "Greg",
//   sayName: sayNameForAll,
// };
// var name = "Michael";
// person1.sayName(); // outputs "Nicholas"
// person2.sayName(); // outputs "Greg"
//sayNameForAll(); // outputs "Michael"

// function sayNameForAll(label) {
//   console.log(label + ":" + " " + this.name);
// }
// var person1 = {
//   name: "Nicholas",
// };
// var person2 = {
//   name: "Greg",
// };
// var name = "Michael";
// sayNameForAll.call(this, "global"); // outputs "global:Michael"
// sayNameForAll.call(person1, "person1"); // outputs "person1:Nicholas"
// sayNameForAll.call(person2, "person2"); // outputs "person2:Greg"

// CHAPTER 3: UNDERSTANDING OBJECTS
// var person1 = {
//   name: "Nicholas",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// console.log("name" in person1); // true
// console.log(person1.hasOwnProperty("name")); // true
// console.log("toString" in person1); // true
// console.log(person1.hasOwnProperty("toString")); // false

// var person1 = {
//   name: "Nicholas",
// };
// Object.defineProperty(person1, "name", {
//   enumerable: false,
// });
// console.log("name" in person1); // true
// console.log(person1.propertyIsEnumerable("name")); // false
// var properties = Object.keys(person1);
// console.log(properties.length); // 0
// Object.defineProperty(person1, "name", {
//   configurable: false,
// });
// // try to delete the Property
// delete person1.name;
// console.log("name" in person1); // true
// console.log(person1.name); // "Nicholas"
// Object.defineProperty(person1, "name", {
//   // error!!!
//   configurable: true,
//});

// var person1 = {};
// Object.defineProperty(person1, "name", {
// value: "Nicholas",
// enumerable: true,
// configurable: true,
// writable: true
// });

// var person1 = {};
// Object.defineProperty(person1, "name", {
//   value: "Nicholas",
// });
// console.log("name" in person1); // true
// console.log(person1.propertyIsEnumerable("name")); // false
// delete person1.name;
// console.log("name" in person1); // true
// person1.name = "Greg";
// console.log(person1.name); // Nicolas

var person1 = {
  _name: "Nicholas",
};
Object.defineProperty(person1, "name", {
  get: function () {
    console.log("Reading name");
    return this._name;
  },
});
console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false
delete person1.name;
console.log("name" in person1); // true
person1.name = "Greg";
console.log(person1.name); // "Nicholas"
