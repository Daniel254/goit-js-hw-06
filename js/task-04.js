let currentValue = 0;
const counter = document.getElementById("counter");
const decrButton = counter.querySelector('[data-action="decrement"]');
const incrButton = counter.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById("value");

const incrementHandler = () => {
  counterSpan.textContent = ++currentValue;
};
const decrementHandler = () => {
  counterSpan.textContent = --currentValue;
};

decrButton.addEventListener("click", decrementHandler);
incrButton.addEventListener("click", incrementHandler);
