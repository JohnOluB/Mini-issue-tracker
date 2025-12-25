//Query selectors
const themeButton = document.querySelector("#theme-button");
const mainContainer = document.querySelector(".main-container");

//Event listener
themeButton.addEventListener("click", () => {
  mainContainer.classList.toggle("dark-theme");
  if (mainContainer.classList.contains("dark-theme")) {
    themeButton.textContent = "Light mode";
  } else {
    themeButton.textContent = "Dark mode";
  }
});
