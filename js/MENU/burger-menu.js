const navMenu = document.querySelector('.nav-menu');

const burger = document.querySelector('.nav-item-burger');
const navBurgerIcon = document.querySelector('.nav-burger-icon');
function burgerMenu() {
    
    if (navMenu.className === "nav-menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.style.display = 'none';
        
        navBurgerIcon.style.display = 'block';
    }
}

burger.addEventListener('click', burgerMenu);