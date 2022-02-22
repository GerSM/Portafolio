
/* Menu Hamburguesa */
const menu = document.querySelector(".menu");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu-opened")
}

open.addEventListener("click", toggleMenu)
close.addEventListener("click", toggleMenu)

const menuLinks = document.querySelectorAll('.menu a[href^="#"]')
menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu-opened")
    })
})