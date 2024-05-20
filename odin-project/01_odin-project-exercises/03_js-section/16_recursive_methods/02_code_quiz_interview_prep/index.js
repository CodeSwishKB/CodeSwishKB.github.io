// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
const sumRange = (n) => {
  if (n == 1) return 1;
  return n + sumRange(n - 1);
};
// console.log(sumRange(3))
/** explaination
sumRange(3)
  3 + sumRange(2) = 5
    2 + sumRange(1) = 3
      1 + sumRange(1) = 2
**/

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
// Sample:
// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1
const power = (n, pow) => {
  if (pow == 1) return n;
  return n * power(n, pow - 1);
};
// console.log(power(2, 4))
/** explaination
power(2, 4)
  2 * power(2, 3) = 16
    2 * power(2, 2) = 8
      2 * power(2, 1) = 4
**/

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// Sample:
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
const factorial = (n) => {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
};
// console.log(factorial(5));
/** explaination 
factorial(5)
  5 * factorial(4) = 20
    4 * factorial(3) = 12
      3 * factorial(2) = 6
        2 * factorial(1) = 2  // n-1 until n became 1
**/

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
// Sample:
// var allAreLessThanSeven = all([1,2,9], function(num){
// return num < 7;
// });
// console.log(allAreLessThanSeven); // false
const all = (arr, callbackFn) => {
  var copy = copy || arr.slice();

  if (copy.length === 0) return true;
  if (callbackFn(copy[0])) {
    copy.shift();
    return all(copy, callbackFn);
  } else {
    return false;
  }
};
var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
// console.log(allAreLessThanSeven); // false

// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
const productOfArray = (arrNum) => {
  // Base case
  if (arrNum.length === 0) return 1;
  return arrNum.shift() * productOfArray(arrNum);
};
var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60
// console.log(six, sixty)

// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const contains = (obj, searchVal) => {
  // base case
  if (typeof obj !== "object" || obj === null) {
    return obj === searchVal;
  }

  // loop the object
  for (let value of Object.values(obj)) {
    // recursion starts
    if (contains(value, searchVal)) {
      return true;
    }
  }
  return false;
  // let exist = Object.values(obj.data.info.stuff.thing.moreStuff).includes(val);
  // return exist;
};
let hasIt = contains(nestedObject, 44); // true
// console.log(hasIt);
let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(doesntHaveIt);

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array
const totalIntegers = (arr) => {
  if (arr.length == 0) return 0;

  let total = 0;
  let firstEl = arr.shift();

  //check if its array and number
  if (Array.isArray(firstEl)) {
    total += totalIntegers(firstEl);
  } else if (Number.isInteger(firstEl)) {
    total++;
  }

  return total + totalIntegers(arr);
};
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
// console.log(seven)

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists
const SumSquares = (arrNum) => {
  // base case
  if (arrNum.length === 0) return 0;

  // variable total
  let total = 0;

  // loop the arrNum
  for (let i = 0; i < arrNum.length; i++) {
    // check if its array
    if (Array.isArray(arrNum[i])) {
      // add it to total recursively
      total += SumSquares(arrNum[i]);
    } else {
      // after recursively check, if it is array square the items
      total += arrNum[i] * arrNum[i];
    }
  }
  return total;
};
var l = [1, 2, 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1
l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
const replicate = (times, n) => {
  if (times <= 0) {
    return [];
  }
  return [n].concat(replicate(times - 1, n));
};
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
