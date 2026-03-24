// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!toggle.contains(e.target) && !links.contains(e.target)) {
    links.classList.remove('open');
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== FADE-UP ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Elements to animate
const selectors = [
  '.section-label', '.section-title', '.section-desc',
  '.sobre__visual', '.sobre__content',
  '.servico-card', '.diferencial-item',
  '.setor-item', '.setores__orgaos',
  '.cta-final__title', '.cta-final__desc',
  '.hero__badge', '.hero__title', '.hero__subtitle',
  '.hero__specialties', '.hero__actions', '.hero__trust'
];

selectors.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
});

// Hero items animate faster since they're in view on load
document.querySelectorAll('.hero__badge, .hero__title, .hero__subtitle, .hero__specialties, .hero__actions, .hero__trust').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12 + 0.2}s`;
});
