// ==========================
// CONFIGURACIÓN DEL SORTEO
// ==========================
const CONFIG = {
  whatsappNumber: '56931715777', // Ejemplo Chile: 56912345678 (sin +, espacios ni guiones)
  whatsappMessage: 'Hola Cash Norte Cl 👋 Quiero información para participar en el sorteo del Xiaomi Electric Scooter 6.',
  raffleDate: 'Fecha por confirmar'
};

const whatsappButtons = document.querySelectorAll('.js-whatsapp');
whatsappButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    if (!CONFIG.whatsappNumber) {
      alert('Falta configurar el número de WhatsApp en script.js. Usa formato 569XXXXXXXX.');
      return;
    }

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
});

const raffleDate = document.getElementById('raffle-date');
if (raffleDate) raffleDate.textContent = CONFIG.raffleDate;

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
