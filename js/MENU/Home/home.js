function Home () {
    this.backToHome = function() {  
        if (aboutPageSection.style.display === 'block') {
            aboutPageSection.style.display = 'none';
        } else if (recipePage.style.display !== 'none') {
            recipePage.style.display = 'none';
        } else if (loginPageSection.style.display !== 'none') {
            loginPageSection.style.display = 'none';
        } else if (contactsPageSection.style.display !== 'none') {
            contactsPageSection.style.display = 'none';
        } else if (userPageSection.style.display !== 'none' ) {
            userPageSection.style.display = 'none';
        }
        slider.style.display = 'block';
        main.style.display = 'block';
        pagination.style.display = 'flex';
        searchContainer.style.display = 'flex';
    } 
    backHome.addEventListener('click', this.backToHome);
    logo.addEventListener('click', this.backToHome);
}

const home = new Home();
