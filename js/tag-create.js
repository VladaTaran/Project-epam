const tagCreator = function (tag, parent, key, value, anotherKay, anotherValue ) {
    let newTag = document.createElement(tag);
    newTag.setAttribute(key, value);
    if (anotherKay && anotherValue) {
        newTag.setAttribute(anotherKay, anotherValue)
    }
    return parent.appendChild(newTag);
}
const main = document.querySelector('.main');
const breadCrumbs = document.querySelector('.bread-crumbs');
const recipe = document.querySelectorAll('.recipe');
const aboutPageSection = document.querySelector('.about-page-section');
const loginPageSection = document.querySelector('.login-page-section');
// const login = document.getElementById('login');
const recipePage = document.querySelector('.recipe-page');
const slider = document.querySelector('.food-slider');
const searchContainer = document.querySelector('.search-container');
const contactsPageSection = document.querySelector('.contacts-page');
const userPageSection = document.querySelector('.user-page');
const pagination = document.querySelector('.pagination');
const postsPerPage = 4;

