// // task
// // Sum all numbers till the given one
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
// For instance:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:
//     Using a for loop.
//     Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
//     Using the arithmetic progression formula.
// An example of the result:
// function sumTo(n) { /*... your code ... */ }
// alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?
// P.P.S. Can we use recursion to count sumTo(100000)?

// for loop
const sumTo = (n) => {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += i;
    console.log(i);
  }
  return Number(res);
};
// console.log(sumTo(4))

// recursion
const sumTo2 = (n) => {
  if (n === 1) return 1;
  return n + sumTo2(n - 1);
};
// console.log(sumTo2(4))

// arithmetic progression -> formula: n * (n + 1) / 2
const sumTo3 = (n) => {
  return (n * (n + 1)) / 2;
};
// console.log(sumTo3(4))

// Calculate factorial
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!
// We can write a definition of factorial like this:
// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.
// alert( factorial(5) ); // 120
const factorial = (n) => {
  if (n == 1) return n;
  return n * factorial(n - 1);
};

// Fibonacci numbers
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.
// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....
// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.
// Write a function fib(n) that returns the n-th Fibonacci number.
// An example of work:
// function fib(n) { /* your code */ }
// alert(fib(3)); // 2
const fib = (n) => {
  if (n == 1) return 0;
  if (n == 2) return 1;
  if (n == 3) return 2;
  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(77))

// NOTE: Fast solution ;)
const fib2 = (n) => {
  // dynamic programming bottom up
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};
// console.log(fib2(3));

// Output a single-linked list
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Write a function printList(list) that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.
// What’s better: with recursion or without it?

// using a loop
const printList = (list) => {
  // jsinfo solution
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

  // my solution
  // for (let item of Object.values(list)) {
  //   console.log(item.next);
  // }
};
// printList(list);

// using recursion
const printList2 = (list) => {
  console.log(list.value);
  if (list.next) {
    printList2(list.next);
  }
};
// printList2(list);

// Output a single-linked list in the reverse order
// importance: 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.
// Make two solutions: using a loop and using a recursion.

// using loop
const printListRev = (list) => {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};
// printListRev(list);

// using recursion
const printListRev2 = (list) => {
  if (list.next) printListRev2(list.next);
  console.log(list.value);
};
// printListRev2(list);

// collatz, cs50
const collatz = (n) => {
  if (n <= 1) return 0;
  if (n % 2 === 0) return 1 + collatz(n / 2);
  if (n % 2 !== 0) return 1 + collatz(3 * n + 1);
};
console.log(collatz(3));
