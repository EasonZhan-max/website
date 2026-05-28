const root = document.documentElement;
const savedTheme = localStorage.getItem("site-theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("site-theme", next);
  });
}

const searchInput = document.getElementById("searchInput");
const softwareGrid = document.getElementById("softwareGrid");

if (searchInput && softwareGrid) {
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const cards = softwareGrid.querySelectorAll(".software-card");

    cards.forEach(card => {
      const text = (card.innerText + " " + (card.dataset.keywords || "")).toLowerCase();
      card.style.display = text.includes(keyword) ? "flex" : "none";
    });
  });
}
