function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const textColorEl = document.querySelector("span.color");

const changeColorHandler = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textColorEl.textContent = color;
};

changeColorBtn.addEventListener("click", changeColorHandler);
