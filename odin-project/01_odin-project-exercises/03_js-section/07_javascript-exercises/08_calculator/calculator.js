const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const sum = nums=> nums.reduce((total, num) => total + num, 0 )  
const multiply = nums => nums.reduce((total, num) => total * num, 1)  
const power = (num, ex) => num ** ex
const factorial = num => num == 0 ? 1 : num * factorial(num - 1)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
