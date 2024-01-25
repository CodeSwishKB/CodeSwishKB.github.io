const elDisplay = document.querySelector('.display') 

let firstNum  = ""
let op = ""
let secondNum = ""

const numsBtn = document.querySelectorAll('.numop') 

const operatorsBtn = document.querySelectorAll('.operator') 

const equalBtn = document.querySelector('.equal')

const decBtn = document.querySelector('.dec')

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clearNum)
equalBtn.addEventListener("click", operate)

    numsBtn.forEach((numBtn) => {
        numBtn.addEventListener('click', (e) => {
            handlerNum(e.target.textContent)
        })
    })


function handlerNum(num){
    if(secondNum.length <= 11){
        secondNum += num
        elDisplay.textContent = secondNum
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
    secondNum = ""
    elDisplay.textContent = `${firstNum} ${op} ${secondNum}`
}

function operate(){    
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)

        switch(op){
            case '+':
                addNum(firstNum, secondNum)
                break;
            
            case '-':
                subtractNum(firstNum, secondNum)
                break;
            
            case 'x':
                multiplyNum(firstNum, secondNum)
                break;
    
            case '÷':
                if (secondNum <= 0){
                    elDisplay.textContent = 'Can\'t divide by 0 '  
                } else {
                    divideNum(firstNum, secondNum)
                    
                }
                break
        }
        
}

function addNum(num1, num2){
     num1 += num2
     elDisplay.textContent = num1
}
function subtractNum(num1, num2){
     num1 -= num2
     elDisplay.textContent = num1

}
function multiplyNum(num1, num2){
    num1 *= num2
    elDisplay.textContent = num1

}
function divideNum(num1, num2){
     num1 /= num2
     elDisplay.textContent = num1

}

function clearNum(){
    firstNum = ""
    secondNum = ""
    elDisplay.textContent = 0
}