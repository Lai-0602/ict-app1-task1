const txtInput = document.getElementById("txtInput");
const enterBtn = document.getElementById("enterBtn");
const greetTxt = document.getElementById("greetTxt");
enterBtn.addEventListener("click", () => {
  greetTxt.textContent = "Hi, " + txtInput.value;
})