let currentValue = 0;
const counter = document.getElementById("counter");
const decrButton = counter.querySelector('[data-action="decrement"]');
const incrButton = counter.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById("value");

const changeCounter = (e) => {
  const action = e.currentTarget.dataset.action;
  if (action === "decrement") {
    currentValue -= 1;
  } else if (action === "increment") {
    currentValue += 1;
  }
  counterSpan.textContent = currentValue;
};

decrButton.addEventListener("click", changeCounter);
incrButton.addEventListener("click", changeCounter);
