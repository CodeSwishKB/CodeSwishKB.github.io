const elDisplay = document.querySelector(".display");
const numsBtn = document.querySelectorAll(".numop");
const operatorsBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const decBtn = document.querySelector(".dec");
const bsBtn = document.querySelector(".bs");
const clearBtn = document.querySelector(".clear");

let firstNum = "";
let op = "";
let secondNum = "";

window.addEventListener("keydown", handleKeypress);
equalBtn.addEventListener("click", checker);
decBtn.addEventListener("click", decimal);
bsBtn.addEventListener("click", back);
clearBtn.addEventListener("click", clearNum);

numsBtn.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => {
    handlerNum(e.target.textContent);
  });
});

operatorsBtn.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleKeypress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handlerNum(e.key);
    // e.keyCode.style.backgroundColor = "yellow";
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && secondNum != "" && firstNum != "")
  ) {
    operate();
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    handleOperator(e.key);
  }
  if (e.key === "*") {
    handleOperator("x");
  }
  if (e.key === ".") {
    decimal();
  }
  if (e.key === "Backspace") {
    back();
  }
}

function checker() {
  if (secondNum != "" && firstNum != "") {
    operate();
  }
}

function back() {
  if (secondNum !== "") {
    secondNum = secondNum.slice(0, -1);
    elDisplay.textContent = secondNum;
    if (secondNum === "") {
      elDisplay.textContent = "0";
    }
  }
}

function handlerNum(num) {
  if (firstNum !== "" && secondNum !== "" && op !== "") {
    elDisplay.textContent = secondNum;
  }
  if (secondNum.length <= 11) {
    secondNum += num;
    elDisplay.textContent = secondNum;
  }
}

function handleOperator(ops) {
  if (firstNum === "") {
    firstNum = secondNum;
    operatorCheck(ops);
  } else if (secondNum === "") {
    operatorCheck(ops);
  } else {
    operate();
    op = ops;
  }
}

function operatorCheck(text) {
  op = text;
  elDisplay.textContent = `${firstNum} ${op}`;
  secondNum = "";
}

function operate() {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  switch (op) {
    case "+":
      firstNum += secondNum;
      break;

    case "-":
      firstNum -= secondNum;
      break;

    case "x":
      firstNum *= secondNum;
      break;

    case "÷":
      if (secondNum <= 0) {
        firstNum = "Can't divide by 0 ";
        displayResult();
        return;
      }
      firstNum /= secondNum;
      break;
  }
  firstNum = roundNumber(firstNum);
  firstNum = firstNum.toString();
  displayResult();
}

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}

function displayResult() {
  if (firstNum.length <= 11) {
    elDisplay.textContent = firstNum;
  } else {
    elDisplay.textContent = firstNum.slice(0, 11) + "...";
  }
  op = "";
  secondNum = "";
}

function clearNum() {
  firstNum = "";
  secondNum = "";
  elDisplay.textContent = "0";
}

function decimal() {
  if (!secondNum.includes(".")) {
    secondNum += ".";
    elDisplay.textContent = secondNum;
  }
}
