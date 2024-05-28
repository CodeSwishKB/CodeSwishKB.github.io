// O(1) -> Constant complexity
function getSum(x, y, z){
  let sum = 0
  sum = x + y + z;
  return sum
}
// console.log(getSum(1, 4, 1))

// O(n) -> Linear complexity
function getSumArr(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
let arrNum = [1,3,3,5]
// console.log(getSumArr(arrNum))

// O(n) -> linear
function getSumArr2(arr){
  let size = arr.length
  if(size == 1){
    return arr[0]
  } else {
    return (arr[0] + getSumArr2(arr[size]))
  }
}
console.log(getSumArr2(arrNum))

