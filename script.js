const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

const searchInput = document.getElementById("searchInput");
const grid = document.getElementById("softwareGrid");

if (searchInput && grid) {
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const cards = grid.querySelectorAll(".software-card");

    cards.forEach((card) => {
      const text = (card.innerText + " " + (card.dataset.keywords || "")).toLowerCase();
      card.style.display = text.includes(keyword) ? "grid" : "none";
    });
  });
}
