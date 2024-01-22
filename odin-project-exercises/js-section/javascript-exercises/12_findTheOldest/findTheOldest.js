const findTheOldest = function(arr) {
  return arr.reduce((oldPerson, currPerson) => {
    const oldestAge = getAge(oldPerson.yearOfBirth, oldPerson.yearOfDeath);
    const currentAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
    return oldestAge < currentAge ? currPerson : oldPerson
  })
};

// get the age of every person of if they are still alive
function getAge(birth, death){
  if(!death) death = new Date().getFullYear()
  return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
