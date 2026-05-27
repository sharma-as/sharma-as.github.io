document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('form-success');

  if (!btn || !successMsg) return;

  btn.innerHTML = 'DISPATCHING INTERFACE LINK...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = 'DISPATCH COMPLETED';
    btn.classList.remove('bg-brand-900', 'dark:bg-brand-100');
    btn.classList.add('bg-emerald-600', 'text-white');
    successMsg.classList.remove('hidden');

    document.getElementById('form-name').value = '';
    document.getElementById('form-email').value = '';
    document.getElementById('form-subject').value = '';
    document.getElementById('form-message').value = '';
  }, 1000);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.classList.remove('overflow-hidden');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.fixed').forEach((modal) => {
      modal.classList.add('hidden');
    });
    document.body.classList.remove('overflow-hidden');
  }
});
