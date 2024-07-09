const divElem = document.querySelector(".showing-div");
const htmlElem = document.querySelector(":root");

htmlElem?.addEventListener("click", showHide);
divElem?.addEventListener("click", showHide);

function showHide() {
  divElem?.classList.toggle("showing");
}

const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translatX(${ev.clientX - 25}px)`;
  },
  false,
);


