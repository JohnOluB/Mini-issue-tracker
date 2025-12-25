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

const themeButton = document.querySelector("#theme-button");
const mainContainer = document.querySelector(".main-container");
const issueTitle = document.querySelector("#issue-title");
const issueBox = document.querySelector("#issue-box");
const saveButton = document.querySelector("#save-button");
const cancelButton = document.querySelector("#cancel-button");
const createIssue = document.querySelector("#create-issue");
const issuesList = document.querySelector("#issues-list");
function displayIssues() {
  issuesList.innerHTML = "";
  issues.forEach((issue, index) => {
    const issueDiv = document.createElement("div");
    issueDiv.className = "issue-item";
    issueDiv.innerHTML = `
      <h3>${issue.title}</h3>
      <p>${issue.description}</p>
      <p>Status: ${issue.status}</p>
    <p>Priority: ${issue.priority}</p>
    `;
    issuesList.appendChild(issueDiv);
  });
}
saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.querySelector("#issue-title").value;
  const description = document.querySelector("#issue-description").value;
  const priority = document.querySelector("#issue-priority").value;

  if (title.trim() && description.trim()) {
    const newIssue = {
      title: title,
      description: description,
      status: "open",
      priority: priority,
    };

    issues.push(newIssue);

    displayIssues();

    document.querySelector("#issue-title").value = "";
    document.querySelector("#issue-description").value = "";
    document.querySelector(".modal").classList.remove("show");
  } else {
    alert("Please fill in all fields");
  }
});

cancelButton.addEventListener("click", () => {
  document.querySelector(".new-issue").classList.remove("show");
});

displayIssues();

createIssue.addEventListener("click", () => {
  document.querySelector(".new-issue").classList.add("show");
});

themeButton.addEventListener("click", () => {
  mainContainer.classList.toggle("dark-theme");
  if (mainContainer.classList.contains("dark-theme")) {
    themeButton.textContent = "Light mode";
  } else {
    themeButton.textContent = "Dark mode";
  }
});
