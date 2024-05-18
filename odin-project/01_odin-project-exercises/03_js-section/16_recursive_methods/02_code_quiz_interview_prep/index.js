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
console.log(factorial(5));
/** explaination 
factorial(5)
  5 * factorial(4) = 20
    4 * factorial(3) = 12
      3 * factorial(2) = 6
        2 * factorial(1) = 2  // n-1 until n became 1
**/
