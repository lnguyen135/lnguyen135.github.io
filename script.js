
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
const username = "lnguyen135";
const repoContainer = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {

    data.slice(0,6).forEach(repo => {

      const repoCard = document.createElement("div");
      repoCard.classList.add("repo-card");

      repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;

      repoContainer.appendChild(repoCard);

    });

  });