const loginFormElem = document.querySelector(".login-form");

loginFormElem.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    e.target.reset();
  }
}
