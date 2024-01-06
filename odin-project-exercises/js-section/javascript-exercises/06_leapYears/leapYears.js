const leapYears = function(year) {
    // let isLeapYear = (year % 100 === 0) ? year % 400 === 0  : year % 4 === 0
    // if(!year )
    // if (isLeapYear) {
    //     return true
    // } else {
    //     false
    // }

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
