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

// var person1 = {
//   _name: "Nicholas",
// };
// Object.defineProperty(person1, "name", {
//   get: function () {
//     console.log("Reading name");
//     return this._name;
//   },
// });
// console.log("name" in person1); // true
// console.log(person1.propertyIsEnumerable("name")); // false
// delete person1.name;
// console.log("name" in person1); // true
// person1.name = "Greg";
// console.log(person1.name); // "Nicholas"

// var person1 = {
//   name: "Nicholas",
// };
// console.log(Object.isExtensible(person1)); // true
// console.log(Object.isSealed(person1)); // false
// Object.seal(person1);
// console.log(Object.isExtensible(person1)); // false
// console.log(Object.isSealed(person1)); // true
// person1.sayName = function () {
//   console.log(this.name);
// };
// console.log("sayName" in person1); // false
// person1.name = "Greg";
// console.log(person1.name); // "Greg"
// delete person1.name;
// console.log("name" in person1); // true
// console.log(person1.name); // "Greg"
// var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
// console.log(descriptor.configurable); // false

// var person1 = {
//   name: "Nicholas",
// };
// console.log(Object.isExtensible(person1)); // true
// console.log(Object.isSealed(person1)); // false
// console.log(Object.isFrozen(person1)); // false
// Object.freeze(person1);
// console.log(Object.isExtensible(person1)); // false
// console.log(Object.isSealed(person1)); // true
// console.log(Object.isFrozen(person1)); // true
// person1.sayName = function () {
//   console.log(this.name);
// };
// console.log("sayName" in person1); // false
// person1.name = "Greg";
// console.log(person1.name); // "Nicholas"
// delete person1.name;
// console.log("name" in person1); // true
// console.log(person1.name); // "Nicholas"
// var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
// console.log(descriptor.configurable); // false
// console.log(descriptor.writable);

// CHAPTER 4: CONSTRUCTORS AND PROTOTYPES
// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   sayName: function () {
//     console.log(this.name);
//   },
//   toString: function () {
//     return "[Person " + this.name + "]";
//   },
// };
// var person1 = new Person("Nicholas");
// console.log(person1 instanceof Person); // true
// console.log(person1.constructor === Person); // false
// console.log(person1.constructor === Object); // true

// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   constructor: Person,
//   sayName: function () {
//     console.log(this.name);
//   },
//   toString: function () {
//     return "[Person " + this.name + "]";
//   },
// };
// var person1 = new Person("Nicholas");
// var person2 = new Person("Greg");
// console.log(person1.toString());
// console.log(person1 instanceof Person); // true
// console.log(person1.constructor === Person); // true
// console.log(person1.constructor === Object); // false
// console.log(person2.toString());
// console.log(person2 instanceof Person); // true
// console.log(person2.constructor === Person); // true
// console.log(person2.constructor === Object); // false

// CHAPTER 5: INHERITANCE
// var book = {
//   title: "The Principles of Object-Oriented JavaScript",
// };
// var message = "Book = " + book;
// console.log(message); // "Book = [object Object]"

// var book = {
//   title: "The Principles of Object-Oriented JavaScript",
//   toString: function () {
//     return "[Book " + this.title + "]";
//   },
// };
// var message = "Book = " + book;
// // "Book = [Book The Principles of Object-Oriented JavaScript]"
// console.log(message);

// var empty = {};
// for (var property in empty) {
//   if (empty.hasOwnProperty(property)) {
//     console.log(property);
//   }
// }
// console.log(empty);

// var book = {
//   title: "The Principles of Object-Oriented JavaScript",
// };
// // is the same as
// var book = Object.create(Object.prototype, {
//   title: {
//     configurable: true,
//     enumerable: true,
//     value: "The Principles of Object-Oriented JavaScript",
//     writable: true,
//   },
// });

// var person1 = {
//   name: "Nicholas",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// var person2 = Object.create(person1, {
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: "Greg",
//     writable: true,
//   },
// });
// person1.sayName(); // outputs "Nicholas"
// person2.sayName(); // outputs "Greg"
// console.log(person1.hasOwnProperty("sayName")); // true
// console.log(person1.isPrototypeOf(person2)); // true
// console.log(person2.hasOwnProperty("sayName")); // false

// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }
// Rectangle.prototype.getArea = function () {
//   return this.length * this.width;
// };
// Rectangle.prototype.toString = function () {
//   return "[Rectangle " + this.length + "x" + this.width + "]";
// };
// // inherits from Rectangle
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }
// Square.prototype = new Rectangle();
// Square.prototype.constructor = Square;
// Square.prototype.toString = function () {
//   return "[Square " + this.length + "x" + this.width + "]";
// };
// var rect = new Rectangle(5, 10);
// var square = new Square(6);
// console.log(rect.getArea()); // 50
// console.log(square.getArea()); // 36
// console.log(rect.toString()); // "[Rectangle 5x10]"
// console.log(square.toString()); // "[Square 6x6]"
// console.log(rect instanceof Rectangle); // true
// console.log(rect instanceof Object); // true
// console.log(square instanceof Square); // true
// console.log(square instanceof Rectangle); // true
// console.log(square instanceof Object); // true

// // inherits from Rectangle
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }
// Square.prototype = Object.create(Rectangle.prototype, {
//   constructor: {
//     configurable: true,
//     enumerable: true,
//     value: Square,
//     writable: true,
//   },
// });
// Square.prototype.toString = function () {
//   return "[Square " + this.length + "x" + this.width + "]";
// };

// constructor stealing using .call() method
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }
// Rectangle.prototype.getArea = function () {
//   return this.length * this.width;
// };
// Rectangle.prototype.toString = function () {
//   return "[Rectangle " + this.length + "x" + this.width + "]";
// };
// // inherits from Rectangle
// function Square(size) {
//   Rectangle.call(this, size, size);
//   // optional: add new properties or override existing ones here
// }
// Square.prototype = Object.create(Rectangle.prototype, {
//   constructor: {
//     configurable: true,
//     enumerable: true,
//     value: Square,
//     writable: true,
//   },
// });
// Square.prototype.toString = function () {
//   return "[Square " + this.length + "x" + this.width + "]";
// };
// var square = new Square(6);
// console.log(square.length); // 6
// console.log(square.width); // 6
// console.log(square.getArea()); // 36

// CHAPTER 6: OBJECT PATTERN
// module pattern
// var yourObject = (function () {
//   // private data variables
//   return {
//     // public methods and properties
//   };
// })();

// var person = (function () {
//   var age = 25;
//   return {
//     name: "Nicholas",
//     getAge: function () {
//       return age;
//     },
//     growOlder: function () {
//       age++;
//     },
//   };
// })();
// console.log(person.name); // "Nicholas"
// console.log(person.getAge()); // 25
// person.age = 100;
// console.log(person.getAge()); // 25
// person.growOlder();
// console.log(person.getAge()); // 26

// function Person(name) {
//   // define a variable only accessible inside of the Person constructor
//   var age = 25;
//   this.name = name;
//   this.getAge = function () {
//     return age;
//   };
//   this.growOlder = function () {
//     age++;
//   };
// }
// var person = new Person("Nicholas");
// console.log(person.name); // "Nicholas"
// console.log(person.getAge()); // 25
// person.age = 100;
// console.log(person.getAge()); // 25
// person.growOlder();
// console.log(person.getAge()); // 26

// hybrid approach
// var Person = (function () {
//   // everyone shares the same age
//   var age = 25;
//   function InnerPerson(name) {
//     this.name = name;
//   }
//   InnerPerson.prototype.getAge = function () {
//     return age;
//   };
//   InnerPerson.prototype.growOlder = function () {
//     age++;
//   };
//   return InnerPerson;
// })();
// var person1 = new Person("Nicholas");
// var person2 = new Person("Greg");
// console.log(person1.name); // "Nicholas"
// console.log(person1.getAge()); // 25
// console.log(person2.name); // "Greg"
// console.log(person2.getAge()); // 25
// person1.growOlder();
// console.log(person1.getAge()); // 26
// console.log(person2.getAge()); // 26

// function mixin(receiver, supplier) {
//   Object.keys(supplier).forEach(function (property) {
//     var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
//     Object.defineProperty(receiver, property, descriptor);
//   });
//   return receiver;
// }
// var person = mixin(new EventTarget(), {
//   get name() {
//     return "Nicholas";
//   },
//   sayName: function () {
//     console.log(this.name);
//     this.fire({ type: "namesaid", name: name });
//   },
// });
// console.log(person.name); // "Nicholas"
// person.name = "Greg";
// console.log(person.name); // "Nicholas"

// no "new" keyword use
function Person(name) {
  if (this instanceof Person) {
    this.name = name;
  } else {
    return new Person(name);
  }
}
var person1 = new Person("Nicholas");
var person2 = Person("Nicholas"); // here is no "new" keyword!!!
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
