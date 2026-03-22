export function setupInteractions() {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const siteNav = document.querySelector('[data-site-nav]');
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const syncHeaderState = () => {
    document.body.dataset.scrolled = String(window.scrollY > 12);
  };

  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });

  if (!mediaQuery.matches) {
    document.body.dataset.animate = 'true';
  }
}
