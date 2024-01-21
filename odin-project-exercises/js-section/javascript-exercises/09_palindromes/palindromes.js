const palindromes = function (str) {
    let removeChar = str.replace(/[A-Z0-9]/ig, '').toLowerCase()
    let checkPalindrome = removeChar.split('').reverse().join('')
    return (removeChar == checkPalindrome)
};

// Do not edit below this line
module.exports = palindromes;
