const form = document.querySelector(".form");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone_number");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm_pwd");

const inputs = [fname, lname, email, phone, pwd, confirmPwd];

function showErrorPwd(password, confirmPassword, msg, msg2) {
  const formControl = password.parentElement;
  const formControl2 = confirmPassword.parentElement;
  formControl.className = "form__info-item error";
  formControl2.className = "form__info-item error";
  const small = formControl.querySelector("small");
  const small2 = formControl2.querySelector("small");
  small.textContent = msg;
  small2.textContent = msg2;
}

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

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not invalid");
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showErrorPwd(
      input1,
      input2,
      "* Please check it again",
      "* Password do not match"
    );
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

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,  
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be les than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  checkLength(fname, 2, 20);
  checkLength(lname, 2, 20);
  checkEmail(email);
  checkLength(pwd, 8, 20);
  checkFields(inputs);
  checkPasswordMatch(pwd, confirmPwd);
  console.log("submit");
}
