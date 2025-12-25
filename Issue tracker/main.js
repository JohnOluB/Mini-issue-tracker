const issues = [
  {
    title: "Hunger",
    description: "I haven't eaten today",
    status: "open",
    priority: "high",
  },
  {
    title: "I'm bored",
    description: "I am feeling bored",
    status: "open",
    priority: "medium",
  },
];

localStorage.setItem("issues", JSON.stringify(issues));
//Query selectors
const themeButton = document.querySelector("#theme-button");
const mainContainer = document.querySelector(".main-container");
const issueTitle = document.querySelector("#issue-title");
const issueBox = document.querySelector("#issue-box");
const saveButton = document.querySelector("#save-button");
const cancelButton = document.querySelector("#cancel-button");
const createIssue = document.querySelector("#create-issue");
const issuesList = document.querySelector("#issues-list");
//Event listener
themeButton.addEventListener("click", () => {
  mainContainer.classList.toggle("dark-theme");
  if (mainContainer.classList.contains("dark-theme")) {
    themeButton.textContent = "Light mode";
  } else {
    themeButton.textContent = "Dark mode";
  }
});

createIssue.addEventListener("click", () => {
  issue;
});

issuesList.addEventListener("click", (e) => {});
