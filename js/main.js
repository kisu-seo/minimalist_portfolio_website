// --- Mobile Nav Toggle ---
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
  });
}

// --- Contact Form Validation ---
const contactForm = document.getElementById('contact-form');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);
  const wrapper = field.closest('.form-field');

  if (message) {
    wrapper.classList.add('has-error');
    error.textContent = message;
  } else {
    wrapper.classList.remove('has-error');
    error.textContent = '';
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    if (!name) {
      setFieldError('name', 'This field is required');
      isValid = false;
    } else {
      setFieldError('name', '');
    }

    if (!email) {
      setFieldError('email', 'This field is required');
      isValid = false;
    } else if (!EMAIL_PATTERN.test(email)) {
      setFieldError('email', 'Please use a valid email address');
      isValid = false;
    } else {
      setFieldError('email', '');
    }

    if (!message) {
      setFieldError('message', 'This field is required');
      isValid = false;
    } else {
      setFieldError('message', '');
    }

    if (isValid) {
      contactForm.reset();
    }
  });
}
