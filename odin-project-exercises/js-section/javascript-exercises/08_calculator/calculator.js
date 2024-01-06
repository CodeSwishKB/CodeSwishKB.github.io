const add = function(num1, num2) {
	return num1 + num2
};  

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arrNum) {
	let sum = 0
  for (let i = 0; i < arrNum.length; i++){
    sum += arrNum[i]
  }
  return sum
};

const multiply = function(arrNum) {
  // let product = 1
  // for (let i = 0; i < arrNum.length; i++){
  //   product *= arrNum[i]
  // }
  // return product
  return arrNum.reduce((total, item) => {
    return total * item
  }, 1)
};

const power = function(num, pow) {
	return Math.pow(num, pow)
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
