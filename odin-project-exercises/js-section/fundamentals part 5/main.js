// TASKS!
// Hello, object
// Write the code, one line for each action:
//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.
let user = {
    name: "John",
    surname: "Smith",
}
user.name = "pete"
delete user.name

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
function isEmpty(obj){
    for (let key in obj){
            return false
    }
    return true
}
let schedule = {};
// console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

//Sum object properties
// We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0. 
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let salary in salaries){
    sum += salaries[salary];
}
// console.log(sum)

// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// For instance:
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.
function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2
        }
    }
}
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
// console.log(menu)


// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.
function camelize(str){
  return str
    .split('-')
    .map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}
// console.log(camelize("background-color"));

// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)
function filterRange(arr, a, b){
  return arr.filter(item => (item >= a && item <= b)) 
}
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 3);
// console.log(filtered)
// console.log(arr)

// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// For instance:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]
function filterRangeInPlace(arr, a, b){
  for (let i = 0; i < arr.length; i++){
    let val = arr[i]
    if (val < a || val > b){
      arr.splice(i, 1)
    }
  }
}
// filterRangeInPlace(arr, 1, 9)
// console.log(arr)

// Sort in decreasing order
// let arr = [5, 2, 1, -10, 8];
// // ... your code to sort it in decreasing order
// alert( arr );  8, 5, 2, 1, -10
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a)
// console.log(arr);

// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
// let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
  return arr.slice().sort()
  // return arr  
  // .map(item => item)
  // .sort((a, b) => a > b)
}
// let sorted = copySorted(arr);
// console.log(sorted)
// console.log(arr)

// Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
//     First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
//     Usage example:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
// For instance, let’s add the multiplication *, division / and power **:
//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);
//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8
//     No parentheses or complex expressions in this task.
//     The numbers and the operator are delimited with exactly one space.
//     There may be error handling if you’d like to add it.
function Calculator(){
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  }
  this.calculate = function(str){
    let split = str.split(' ')
    a = +split[0], // to add the string (1st idx); plus sign is important!
    op = split[1], // operation, 2nd idx
    b = +split[2]; // to add the string (3rd idx) plus sign is important!

    return this.methods[op](a, b)
  }
  this.addMethod = function(name, func){
    this.methods[name] = func
  }
}
let calc = new Calculator;
// console.log(calc.calculate("7 + 3"))
let powerCalc = new Calculator;
    powerCalc.addMethod("**", (a, b) => a ** b);
    powerCalc.addMethod("*", (a, b) => a * b);
    let result = powerCalc.calculate("3 * 3");
    // console.log(result)

// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = /* ... your code */
// alert( names ); // John, Pete, Mary
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(people => people.name)
// console.log(names)

// Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
// For instance:
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = /* ... your code ... */
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = users.map(item => (
//   {
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id
//   }
// ))
// console.log(usersMapped[0].fullName)

// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// sortByAge(arr);
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arrName = [ pete, john, mary ];
// function sortByAge(user){
//   return user.sort((a,b) => a.age - b.age)
// }
// sortByAge(arrName)
// console.table(arrName)

// Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
// let arr = [1, 2, 3];
// shuffle(arr);
// // arr = [3, 2, 1]
// shuffle(arr);
// // arr = [2, 1, 3]
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
function shuffle(arrNum){
  // return arrNum.sort(() => Math.random() - 0.5);
  for (let i = arrNum.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arrNum[i], arrNum[j]] = [arrNum[j], arrNum[i]]
    }
    return arrNum 
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(shuffle(arr));

// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
function getAverageAge(users){
  return users.reduce((total, item) => total + item.age, 0) / users.length 
}
// console.log(getAverageAge(arr))

// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:
// function unique(arr) {
//   /* your code */
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(strings) ); // Hare, Krishna, :-O
let strings = ["Hare", "Kyle", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]
function unique(arr) {
  return arr.filter((cur, idx) => arr.indexOf(cur) === idx)
}
// console.log(unique(strings))  

// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// For example:
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// let usersById = groupById(users);
// /*
// // after the call we should have:
// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.
// In this task we assume that id is unique. There may be no two array items with the same id.
// Please use array .reduce method in the solution.
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let usersById = groupById(users);
function groupById(arr){
  return arr.reduce((obj, val) => {
    obj[val.id] = val
    return obj
  }, {})
}
console.log(usersById)
