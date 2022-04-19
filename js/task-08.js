const formEl = document.querySelector(".login-form");

const submitHandler = (e) => {
  e.preventDefault();
  if (formEl.elements.email.value && formEl.elements.password.value) {
    console.log({
      email: formEl.elements.email.value,
      password: formEl.elements.password.value,
    });
  } else {
    alert("Все поля должны быть заполнены");
  }
  formEl.reset();
};

formEl.addEventListener("submit", submitHandler);
