// menu Desktop
const menuDesktop = document.querySelector('.inactive');
const navEmail = document.querySelector('.navbar-email');

const menuMobile = document.querySelector('.inactive-mobile');
const himMenu = document.querySelector('.menu')



navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive')
});

himMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive-menu')
});



