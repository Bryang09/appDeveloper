const button = document.querySelector("#btn");
const mouse = document.querySelector("#mouse");
const services = document.querySelector("#services");
const reviews = document.querySelector("#reviews");
let display = false;

button.addEventListener("click", () => {
  display = !display;

  if (display === false) {
    mouse.style.opacity = 0;
    services.style.display = "none";
    reviews.style.display = "none";
  } else {
    mouse.style.opacity = 1;
    services.style.display = "flex";
    reviews.style.display = "flex";
  }
});
