const ICONS = {
  success: 'fa-check-circle',
  warning: 'fa-exclamation-triangle',
  info: 'fa-info-circle'
};

const COLORS = {
  success: '#10b981',
  warning: '#f59e0b',
  info: '#3b82f6'
};

export function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icon = ICONS[type] || ICONS.info;
  const color = COLORS[type] || COLORS.info;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fas ${icon} toast-icon" style="color:${color};"></i>
    <span>${message}</span>
    <button class="toast-close" aria-label="Cerrar notificación">&times;</button>
  `;

  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
