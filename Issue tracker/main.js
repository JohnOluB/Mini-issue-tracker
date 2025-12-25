//Query selectors
const themeButton = document.querySelector("#theme-button");
const mainContainer = document.querySelector(".main-container");
const issueTitle = document.querySelector("#issue-title");
const issueBox = document.querySelector("#issue-box");
const saveButton = document.querySelector("#save-button");
const cancelButton = document.querySelector("#cancel-button");
const createIssue = document.querySelector("#create-issue");
//Event listener
themeButton.addEventListener("click", () => {
  mainContainer.classList.toggle("dark-theme");
  if (mainContainer.classList.contains("dark-theme")) {
    themeButton.textContent = "Light mode";
  } else {
    themeButton.textContent = "Dark mode";
  }
});

createIssue.addEventListener("click", ()=>{
})