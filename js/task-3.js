const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (e) => {
  const userText = e.currentTarget.value.trim();
  if (userText === "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = userText;
  }
});

