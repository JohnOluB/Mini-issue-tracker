//Query selectors
const themeButton = document.querySelector("#theme-button");

//Event listener

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

