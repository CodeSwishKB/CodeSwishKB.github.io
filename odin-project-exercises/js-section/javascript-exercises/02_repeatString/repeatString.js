const repeatString = function(word, times) {
    if (times < 0) return "ERROR"
    let string = ''
    // for(let i = 0; i < times; i++){
    //     string += word
    // }
    while (times > 0){
        string += word
        times--
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
