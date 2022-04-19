function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elementsContainerEl = document.getElementById("boxes");
const inputQtyBoxesEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

const createBoxes = (amount) => {
  let elementSize = 30;
  let elements = [];
  console.log("amount", amount);
  for (let i = 0; i < amount; i++) {
    const currentElement = document.createElement("div");
    currentElement.style.width = `${elementSize}px`;
    currentElement.style.height = `${elementSize}px`;
    currentElement.style.backgroundColor = `${getRandomHexColor()}`;
    elementSize += 10;
    elements.push(currentElement);
  }
  elementsContainerEl.append(...elements);
};

const destroyBoxes = () => (elementsContainerEl.innerHTML = "");

createBtnEl.addEventListener("click", () => createBoxes(inputQtyBoxesEl.value));
destroyBtnEl.addEventListener("click", destroyBoxes);
