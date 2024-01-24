const elDisplay = document.querySelector('.display') 

let firstNum  = ""
let op = ""
let secondNum = ""

const numsBtn = document.querySelectorAll('.numop') 
const operatorsBtn = document.querySelectorAll('.operator') 
const equalBtn = document.querySelector('.equal')
const decBtn = document.querySelector('.dec')
const clearBtn = document.querySelector('.clear')

equalBtn.addEventListener("click", operate)

numsBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', (e) => {
        handlerNum(e.target.textContent)
    })
})

function handlerNum(num){
    if(firstNum.length <= 11){
        firstNum += num
        elDisplay.textContent = firstNum
    }
}

operatorsBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleOperator(ops){
    op = ops
    firstNum = secondNum
    elDisplay.textContent = `${firstNum} ${op} `
}

function operate(){    
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)
  
        switch(op){
            case '+':
                 firstNum += secondNum
                break;
            
            case '-':
                firstNum -= secondNum
                break;
            
            case '*':
                firstNum *= secondNum
                break;
    
            case '/':
                if (secondNum == 0){
                    console.log('Can\'t divide by 0 ')  
                }  else {
                    firstNum /= secondNum
                } 
        }
        elDisplay.textContent = firstNum
        console.log(firstNum)
        console.log(secondNum)
}
