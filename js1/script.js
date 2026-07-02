// Aspire Autism Centre - site interactions

document.addEventListener('DOMContentLoaded', () => {
  // Smooth-scroll CTA buttons in the hero
  const bookVisitBtn = document.querySelector('.btn-primary');
  const programmesBtn = document.querySelector('.btn-secondary');

  if (bookVisitBtn) {
    bookVisitBtn.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (programmesBtn) {
    programmesBtn.addEventListener('click', () => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Contact form submission (demo only - replace with real endpoint)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.textContent = 'Message sent ✓';
    });
  }

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('nav-links-open');
    });
  }
});
