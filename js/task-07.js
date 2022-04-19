const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

const fontSizeHandler = () => {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
};

fontSizeHandler();
fontSizeControlEl.addEventListener("input", fontSizeHandler);
