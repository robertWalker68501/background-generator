let color1 = document.querySelector(".color-one");
let color2 = document.querySelector(".color-two");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");

const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

