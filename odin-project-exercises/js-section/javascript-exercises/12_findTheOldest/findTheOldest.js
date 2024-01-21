const findTheOldest = function(arr) {
    let ages = arr.map(age => age.yearOfDeath - age.yearOfBirth)
    let a = arr.reduce((oldAge, person) => {
        const oldest = oldAge.ages
        const currPerson = person.ages

        return oldest < currPerson ? arr.name : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
