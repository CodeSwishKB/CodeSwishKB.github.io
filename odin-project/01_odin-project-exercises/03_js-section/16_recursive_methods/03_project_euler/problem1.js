//  Multiples of 3 or 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23
// Find the sum of all the multiples of 3 or 5 below 1000.
const sumOfMultiple = (NUM_BELOW) => {
  // let NUM_BELOW = 1000
  if (NUM_BELOW < 0) {
    return 0;
  }

  if ((NUM_BELOW - 1) % 3 === 0 || (NUM_BELOW - 1) % 5 === 0) {
    
    return (NUM_BELOW - 1) + sumOfMultiple(NUM_BELOW - 1);
  } else {
    return sumOfMultiple(NUM_BELOW - 1);
  }
};
console.log(sumOfMultiple(1000));
