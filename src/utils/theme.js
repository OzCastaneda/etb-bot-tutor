export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!toggle || !icon) return;

  const saved = localStorage.getItem('etb-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('etb-theme', next);
  });
}
