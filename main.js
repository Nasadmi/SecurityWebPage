// Button

const btn = document.querySelector('.btn');

const nav = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

// Scroll Reveal
ScrollReveal().reveal('.minicards', {delay: 250});
ScrollReveal().reveal('.banner', {delay: 250});