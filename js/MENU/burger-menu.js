const nav = document.querySelector('.nav');
var hamburger = document.querySelector('.hamburger');

hamburger.onclick = function() {
    nav.classList.toggle('open');  
};

const theme = document.querySelector('.theme');
const navSubmenu = document.querySelector('.nav-submenu');
const navMenu = document.querySelector('.nav-menu');
theme.onclick = function() {
    if(nav.classList.contains('open') && navSubmenu.style.display === 'none') {
      navSubmenu.style.display = 'block';
      navMenu.style.height = '300px';
    } else {
      navSubmenu.style.display = 'none';
      navMenu.style.height = '200px';
    }
}

