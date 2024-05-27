// Largest Palindrome product
// Problem # 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009=91×99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPalindrome = (num) => {

  let largestNum = '9'
  largestNum += Number(largestNum.repeat(num - 1))
  largestNum = Number(largestNum)

  let highest = 0
  for(let i = largestNum; i > 0; i--){
    for(let j = largestNum; j > 0; j--){
      let product = i * j
      if (isPalindrome(product)) {
        if (product > highest){
          highest = product
          break
        }
      }
    }
  }
  return highest
};
console.log(largestPalindrome(3));

function isPalindrome (num) {
  let rev = String(num).split("").reverse().join("");

  return Number(rev) == num
};

// console.log(isPalindrome("kyle"))
// Product of TWO 3-digit numbers, e.g. 368 x 498 = ???

// base case
// check if num is same in positions
// recursive call and push to array
