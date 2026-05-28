const routes = {
  '/': 'home',
  '/client': 'client',
  '/client/android': 'android',
  '/client/android/clash-meta': 'clash-meta',
  '/tutorial': 'tutorial',
};

const navMap = {
  home: 'home',
  client: 'client',
  android: 'client',
  'clash-meta': 'client',
  tutorial: 'tutorial',
};

function getPath() {
  const hash = window.location.hash.replace('#', '') || '/';
  return routes[hash] ? hash : '/';
}

function renderRoute() {
  const pageName = routes[getPath()] || 'home';
  document.querySelectorAll('[data-page]').forEach(page => {
    page.classList.toggle('active', page.dataset.page === pageName);
  });
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === navMap[pageName]);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☾' : '☀';
  localStorage.setItem('theme', theme);
}

window.addEventListener('hashchange', renderRoute);
document.getElementById('year').textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

renderRoute();
