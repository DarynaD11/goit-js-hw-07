const loginFormElem = document.querySelector(".js-form");

loginFormElem.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const emailUser = e.target.elements.email.value.trim();
  const passwordUser = e.target.elements.password.value.trim();

  if (emailUser === "" || passwordUser === "") {
    return alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailUser,
      password: passwordUser,
    };
    console.log(formData);
    e.target.reset();
  }
}
