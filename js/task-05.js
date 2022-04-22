const outputEl = document.getElementById("name-output");

const inputHandler = (e) => {
  outputEl.textContent = e.target.value ? e.target.value : "Anonymous";
};

document.getElementById("name-input").addEventListener("input", inputHandler);
