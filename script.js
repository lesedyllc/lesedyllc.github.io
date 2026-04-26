'use strict';

// ── Navbar scroll shadow ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// ── Mobile menu ───────────────────────────────────────────────
const menuBtn  = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Inject mobile nav below the header
const mobileNav = document.createElement('div');
mobileNav.className = 'mobile-nav';
mobileNav.id = 'mobile-nav';
navLinks.querySelectorAll('a').forEach(a => {
  const clone = a.cloneNode(true);
  clone.addEventListener('click', closeMobile);
  mobileNav.appendChild(clone);
});
navbar.appendChild(mobileNav);

menuBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});

function closeMobile() {
  mobileNav.classList.remove('open');
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeMobile();
});

// ── Active nav link on scroll ─────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const allLinks  = document.querySelectorAll('#nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
  });
  allLinks.forEach(a => {
    const active = a.getAttribute('href') === `#${current}`;
    a.style.color      = active ? 'var(--navy)' : '';
    a.style.fontWeight = active ? '600' : '';
    a.style.background = active ? 'var(--gray-100)' : '';
  });
}, { passive: true });

// ── Scroll reveal ─────────────────────────────────────────────
const revealTargets = document.querySelectorAll(
  '.service-card, .exp-item, .case-card, .team-card, .value-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('reveal', 'visible');
      }, i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

revealTargets.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Stat counter animation ────────────────────────────────────
function countUp(el, target, suffix, duration = 1400) {
  let startTime = null;
  const update = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed  = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const value    = Math.round(target * ease);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsBar = document.querySelector('.hero-stats-bar');
if (statsBar) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(document.querySelector('.stat-item:nth-child(1) .stat-num'), 20, '%');
        countUp(document.querySelector('.stat-item:nth-child(3) .stat-num'), 3,  '+');
        countUp(document.querySelector('.stat-item:nth-child(5) .stat-num'), 100, '%');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statObserver.observe(statsBar);
}

// ── Contact form ──────────────────────────────────────────────
const form        = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled    = true;
    btn.textContent = 'Sending…';

    // If Formspree ID is configured, post to it; otherwise simulate locally
    const action = form.getAttribute('action');
    const isConfigured = action && !action.includes('YOUR_FORM_ID');

    if (isConfigured) {
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          showSuccess();
          form.reset();
        } else {
          btn.textContent = 'Error — please email us directly';
          btn.disabled    = false;
        }
      } catch {
        btn.textContent = 'Error — please email us directly';
        btn.disabled    = false;
      }
    } else {
      // Demo mode: simulate send
      setTimeout(() => {
        showSuccess();
        form.reset();
      }, 900);
    }

    function showSuccess() {
      formSuccess.textContent = '✓ Message received! We\'ll be in touch within 1–2 business days.';
      formSuccess.classList.add('show');
      btn.textContent = 'Message Sent';
      setTimeout(() => {
        formSuccess.classList.remove('show');
        btn.textContent = 'Send Message';
        btn.disabled    = false;
      }, 6000);
    }
  });
}
