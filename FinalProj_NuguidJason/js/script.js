document.addEventListener('DOMContentLoaded', function () {
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        mobileNav.style.display = 'none';
      } else {
        mobileNav.classList.add('open');
        mobileNav.style.display = 'block';
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

