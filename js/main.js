const button = document.querySelector("#btn");
const mouse = document.querySelector("#mouse");
let display = false;

button.addEventListener("click", () => {
  display = !display;

  if (display === false) {
    mouse.style.opacity = 0;
  } else {
    mouse.style.opacity = 1;
  }
});
