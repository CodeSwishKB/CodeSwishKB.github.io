const uName = document.querySelector("#uname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const comment = document.querySelector("#comment");

email.addEventListener("input", function (e) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("right a proper email");
  } else {
    email.setCustomValidity("");
  }
});

uName.addEventListener("input", (e) => {
  if (uName.validity.tooShort || uName.validity.tooLong) {
    uName.setCustomValidity(
      `Username should be atleast ${uName.minLength} minimum and ${uName.maxLength} max characters`,
    );
  } else {
    uName.setCustomValidity("");
  }
});

// email.addEventListener("input", (e) => {
//   showError()
// });
