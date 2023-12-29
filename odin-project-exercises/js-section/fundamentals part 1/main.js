/**********  TASK ************/
// working with variables
/* 
    1. Declare two variables: admin and name.
    2. Assign the value "John" to name.
    3. Copy the value from name to admin.
    4. Show the value of admin using alert (must output “John”). 
*/
let name, admin
name = "John"
 admin = name 
// alert(admin)

// Giving the right name
/*
    1. Create a variable with the name of our planet. How would you name such a variable?
    2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
let earth
let curVisitor



/*

Assignment

Try the following exercises (and don’t forget to use console.log()!):

    - Add 2 numbers together! (just type console.log(23 + 97) into your html file)
    - Add a sequence of 6 different numbers together.
    - Print the solution to the following equation: (4 + 6 + 9) / 77
        Answer should be approximately 0.24675
    - Let’s use variables!
        Type this statement at the top of the script tag: let a = 10
        In the console console.log(a) should print 10
        Try the following in the console: 9 * a
        and this: let b = 7 * a (returns undefined *) and then console.log(b)
    - You should be getting the hang of this by now… try this sequence:
        Declare a constant variable MAX with the value 57
        Set another variable actual to MAX - 13
        Set another variable percentage to actual / MAX
        If you type percentage in the console and press Enter you should see a value like 0.7719
    - Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.


*/

console.log(23 + 97)
console.log(23 + 97 + 1 + 34 + 69 + 2)
console.log((4 + 6 + 9) / 77) 
 
let anum = 10;
console.log(anum)
console.log(9 * anum)

let b = 7 * anum
console.log(b)


/* 

1. Check the range between
    Write an if condition to check that age is between 14 and 90 inclusively.
    “Inclusively” means that age can reach the edges 14 or 90.

2. Check the range outside
    Write an if condition to check that age is NOT between 14 and 90 inclusively.
    Create two variants: the first one using NOT !, the second one – without it.

3. Check the login
    Write the code which asks for a login with prompt.
    If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
    The password is checked as follows:
        If it equals “TheMaster”, then show “Welcome!”,
        Another string – show “Wrong password”,
        For an empty string or cancelled input, show “Canceled”

*/

// 1. Check the range between
const age = 13
if (age >= 14 && age <= 90){
    console.log("it is between 14 to 90")
} else {
    console.log("it is NOT ")
}

// 2. Check the range outside
if (!(age >= 14 && age <= 90)
    /* age < 14 || age > 90 */ ){
    console.log(`the number is ${age}, so it is OUTSIDE of the range`)
} else{
    console.log(`the number is ${age}, so it is NOT outside`)
}

// 3. Check the login
// let user = prompt("Who's there?", '')
// let $admin = "uyang"
// let $pass = "69"

// if (user === $admin){
//     let pass = prompt('Password', '')
    
//     if(pass == $pass){
//         alert("Welcome")
//     } else if(pass == '' || pass == null) {
//         alert('Canceled')
//     } else if(pass !== $pass){
//         alert('Wrong Password')
//     }

// } else if (user == '' || user == null){
//     alert('Canceled')
// } else if(user != $admin){
//     alert('I don\'t know you')
// }


/*

    1. The name of JavaScript
        Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
        If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

    2. Show the sign
        Using if..else, write the code which gets a number via prompt and then shows in alert:
            1, if the value is greater than zero,
            -1, if less than zero,
            0, if equals zero.
        In this task we assume that the input is always a number.

    3. Rewrite 'if' into '?'
        Rewrite this if using the conditional operator '?':
        let result;
        if (a + b < 4) {
        result = 'Below';
        } else {
        result = 'Over';
        }

    4. Rewrite 'if..else' into '?'
        Rewrite if..else using multiple ternary operators '?'.
        For readability, it’s recommended to split the code into multiple lines.
        let message;
        if (login == 'Employee') {
        message = 'Hello';
        } else if (login == 'Director') {
        message = 'Greetings';
        } else if (login == '') {
        message = 'No login';
        } else {
        message = '';
        }

*/

// 1. The name of JavaScript
// let ans = prompt('What\'s the "official" name of JavaScript?')

// if (ans == 'ECMAScript'){
//     alert("Right!")
// } else {
//     alert('You don\'t know "ECMAScript"!')
// }

// 2. Show the sign
// let ans = prompt('Enter a number', '')

// if(ans > 0){
//     alert(`${ans} = 1`)
// } else if(ans < 0) {
//     alert(`${ans} = -1`)
// } else if (ans == 0){
//     alert(`${ans} = 0`)
// }

// 3. Rewrite 'if' into '?'
// let result = (a + b < 4) ? 'Below' : 'Over'

// Rewrite 'if..else' into '?'
// let message = (login == 'Employee')
//              ? 'Hello' : (login == 'Director')
//              ? 'Greetings' : (login = '') 
//              ? 'No login' : ''


/*

    1. Rewrite the "switch" into an "if"
        Write the code using if..else which would correspond to the following switch:
        switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;
        default:
            alert( 'We hope that this page looks ok!' );
        }

    2. Rewrite "if" into "switch"
        Rewrite the code below using a single switch statement:
        let a = +prompt('a?', '');
        if (a == 0) {
        alert( 0 );
        }
        if (a == 1) {
        alert( 1 );
        }
        if (a == 2 || a == 3) {
        alert( '2,3' );
        }

*/

// 1. Rewrite the "switch" into an "if"
// let browser = prompt('Enter your browser')

// if (browser == 'Edge'){
//     alert('You\'ve got the Edge!')
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
//     alert('Okay we support these browsers too')
// } else {
//     alert('We hope that this page looks ok!')
// }

// 2. Rewrite "if" into "switch"
const $a = +prompt('a?', '')

switch($a){
    case 0:
        alert(0)
        break
    case 1:
        alert(1)
        break
    case 2:
    case 3:
        alert('2,3')
        break
}