/* Esse arquivo foi criado para manipular o menu responsivo */

const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu img')

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active')
})