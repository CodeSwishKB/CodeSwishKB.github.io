const removeFromArray = function(arrNum, ...num) {
    const newArr = []

    arrNum.forEach(item => {
        if (!num.includes(item)){
            newArr.push(item)
        }
    });
    return newArr
   
    // for (let i = 0; i < arrNum.length; i++){
    //     if (arrNum[i] === num){
    //         arrNum.splice(i, 1)
    //     }
    // }
    // return arrNum
};

// Do not edit below this line
module.exports = removeFromArray;
