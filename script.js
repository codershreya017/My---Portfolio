const bars = document.getElementById('bars');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bars) {
  bars.addEventListener('click', () => {
    navbar.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
}