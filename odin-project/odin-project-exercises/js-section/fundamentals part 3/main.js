// Write a function called add7 that takes one number and returns that number + 7.
function add7(num){
    return num + 7
}
console.log("add7 function:", add7(10))

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(n1, n2){
    return n1 * n2
}
console.log("multiply function:", multiply(10, 5))

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str){
    let  a = str[0].toUpperCase() + str.slice(1).toLowerCase()
    return a
}
console.log("capitalize function:", capitalize('botH'))

// Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"
function lastLetter(str){
    let last = str[str.length - 1];
    return `the word is ${str} and the last letter is ${last}`
}
console.log("lastLetter function:", lastLetter('GAGo'))