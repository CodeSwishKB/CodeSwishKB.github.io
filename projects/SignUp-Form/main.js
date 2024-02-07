const form = document.querySelector(".form");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone_number");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm_pwd");

const inputs = [fname, lname, email, phone, pwd, confirmPwd];

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form__info-item error";
  const small = formControl.querySelector("small");
  small.textContent = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form__info-item success";
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "* Password do not match");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkFields(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} must put`);
    } else {
      showSuccess(input);
    }
  });
}

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  checkFields(inputs);
  checkPasswordMatch(pwd, confirmPwd);
  console.log("submit");
}
