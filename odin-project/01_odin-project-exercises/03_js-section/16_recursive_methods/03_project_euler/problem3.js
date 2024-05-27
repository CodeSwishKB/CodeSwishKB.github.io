// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
const largePrime = (num, i = 2, arr = []) => {

  if(num < 2){
    return arr
  }

  if(num % i === 0){
    arr.push(i)
    largePrime(num / i, i, arr)
  } else {
    largePrime(num, i + 1, arr)
  }

  return arr[arr.length - 1]
};

// base case
// check if its prime
  // if it is push to the arrFactor
  // and recursive call, largePrime(num/i, i, arr)
// else increment i, largePrime(num, i + 1, arr)
// return the arrFactor 

console.log(largePrime(600851475143));
