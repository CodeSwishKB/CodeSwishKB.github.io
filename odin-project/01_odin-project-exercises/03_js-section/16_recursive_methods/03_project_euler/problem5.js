// Smallest multiple
// problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// 1 to 20 num
const smallMul = (num) => {
  let sol;
  let possibleSol = num;
  let unSol = true;

  while (unSol === true) {
    for (let currDivisor = 1; currDivisor <= num; currDivisor++) {
      if (possibleSol % currDivisor !== 0) {
        break;
      } else {
        if (currDivisor == num) {
          sol = possibleSol;
          unSol = false;
        }
      }
    }
    possibleSol += 1;
  }
  return sol;
};

console.log(smallMul(20));

