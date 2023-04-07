const navbar = document.querySelector('.navbar_main');
const button = document.querySelector('.fa-align-justify');

button.addEventListener('click', function() {
  navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
});