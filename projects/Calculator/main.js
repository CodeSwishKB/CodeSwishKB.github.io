const numsOp = document.querySelectorAll('.numop')

let forEach = function(array, callback, scope){
    for (let i = 0; i < array.length; i++){
        callback.call(scope, i, array[i])
    }
}

forEach(numsOp, function(index, value){
    console.log(index, value)
})