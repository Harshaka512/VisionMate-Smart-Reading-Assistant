/**
 * VisionMate — Core Global JavaScript
 * Header behavior, mobile drawer, accessibility toggles, scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('open');
    });

    // Close on navigation click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Accessibility Controls (High Contrast & Font Resizer)
  const contrastBtn = document.getElementById('toggle-contrast-btn');
  const fontBtn = document.getElementById('toggle-font-btn');

  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHigh = document.body.classList.contains('high-contrast');
      contrastBtn.setAttribute('aria-pressed', isHigh);
      localStorage.setItem('vm_high_contrast', isHigh ? 'true' : 'false');
    });

    if (localStorage.getItem('vm_high_contrast') === 'true') {
      document.body.classList.add('high-contrast');
      contrastBtn.setAttribute('aria-pressed', 'true');
    }
  }

  if (fontBtn) {
    fontBtn.addEventListener('click', () => {
      document.body.classList.toggle('font-large');
      const isLarge = document.body.classList.contains('font-large');
      fontBtn.setAttribute('aria-pressed', isLarge);
      localStorage.setItem('vm_large_font', isLarge ? 'true' : 'false');
    });

    if (localStorage.getItem('vm_large_font') === 'true') {
      document.body.classList.add('font-large');
      fontBtn.setAttribute('aria-pressed', 'true');
    }
  }

  // 4. Highlight current page in nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});
