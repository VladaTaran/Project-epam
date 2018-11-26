// const myBreadCrumbsFormer = document.querySelectorAll('.bc-former');
const aboutBcFormer = document.querySelector('#bc-ABOUT');
console.log(aboutBcFormer);
console.log(aboutPageSection);
const contactsBcFormer = document.getElementById('bc-CONTACTS');

if (aboutPageSection.style.display !== 'none') {
    aboutBcFormer.style.display = 'block';
} else {
    aboutBcFormer.style.display = 'none';
}

if (contactsPageSection.style.display !== 'none') {
    contactsBcFormer.style.display = 'block';
} else {
    contactsBcFormer.style.display = 'none';
}


