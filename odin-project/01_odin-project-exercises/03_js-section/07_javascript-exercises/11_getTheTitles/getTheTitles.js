const getTheTitles = function(arr) {
    return arr.map(val =>  val.title)

    // return arr.reduce((obj, val) => {
    //      obj[val.title] = val.title
    //      return obj

    // }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
