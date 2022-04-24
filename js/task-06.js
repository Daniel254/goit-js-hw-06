const validationInputEl = document.getElementById("validation-input");
const validInputLength = validationInputEl.dataset.length;

const onBlurHandler = () => {
  const className =
    Number(validInputLength) === validationInputEl.value.length
      ? "valid"
      : "invalid";
  validationInputEl.className = className;
};

validationInputEl.addEventListener("blur", onBlurHandler);
