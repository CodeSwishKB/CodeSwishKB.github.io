const elDisplay = document.querySelector('.display') 

let firstNum  = ""
let op = ""
let secondNum = ""

const numsBtn = document.querySelectorAll('.numop') 

const operatorsBtn = document.querySelectorAll('.operator') 

const equalBtn = document.querySelector('.equal')
equalBtn.addEventListener("click", () => {
    if(secondNum != "" && firstNum != ""){
        operate()
    }
})

const decBtn = document.querySelector('.dec')
decBtn.addEventListener('click', decimal)

const bsBtn = document.querySelector('.bs')
bsBtn.addEventListener('click', back)
function back(){    
    return bsBtn.substr(0, bsBtn.length - 1);
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clearNum)

    numsBtn.forEach((numBtn) => {
        numBtn.addEventListener('click', (e) => {
            handlerNum(e.target.textContent)
        })
    })


    operatorsBtn.forEach(operatorBtn => {
        operatorBtn.addEventListener('click', (e) => {
            handleOperator(e.target.textContent)
        })
    })
    
    function handlerNum(num){
        if(firstNum !== "" && secondNum !== "" && op !== ""){
            elDisplay.textContent = secondNum
        }
        if(secondNum.length <= 11){
            secondNum += num
            elDisplay.textContent = secondNum
        }
    }

function handleOperator(ops){
    if (firstNum === ""){
        firstNum = secondNum
        operatorCheck(ops)
    } else if (secondNum === ""){
        operatorCheck(ops)
    } else {
        operate()
        op = ops
        
    }
}

function operatorCheck(text){
    op = text
    elDisplay.textContent =  `${firstNum} ${op}`
    secondNum = ""
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
        
        case 'x':
            firstNum *= secondNum
            break;
    
        case '÷':
            if (secondNum <= 0){
                firstNum = 'Can\'t divide by 0 '
                displayResult()
                return
            } 
            firstNum /= secondNum
            break
    }
    firstNum = roundNumber(firstNum)
    firstNum = firstNum.toString()
    displayResult()
}

function roundNumber(num){
    return Math.round(num * 100000) / 100000
}

function displayResult(){
    if(firstNum.length <= 11){
        elDisplay.textContent = firstNum
    } else {
        elDisplay.textContent = firstNum.slice(0, 11) + '...'
    }
    op = ""
    secondNum = ""
}

function clearNum(){
    firstNum = ""
    secondNum = ""
    elDisplay.textContent = "0"
}

function decimal(){
    if(!secondNum.includes('.')){
        secondNum += '.'
        elDisplay.textContent = secondNum
    }
}

