function Home () {
    // this.mainPage = new Recipe();
    this.home = document.querySelector('#home');
const breadCrMain = document.querySelector('#back-home');
// console.log(breadCrMain);
    
     function backToHome(e) {     
 
        if (aboutPageSection.style.display === 'block') {
            aboutPageSection.style.display = 'none';
            breadCrumbs.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (recipePage.style.display !== 'none') {
            recipePage.style.display = 'none';
            breadCrumbs.style.display = 'none';
            // userPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (loginPageSection.style.display !== 'none') {
            loginPageSection.style.display = 'none';
            breadCrumbs.style.display = 'none';
            // userPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (contactsPageSection.style.display !== 'none') {
            breadCrumbs.style.display = 'none';
            contactsPageSection.style.display = 'none';
            userPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (userPageSection.style.display !== 'none' ) {
            breadCrumbs.style.display = 'none';
            userPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } 

    }
    this.home.addEventListener('click', backToHome);
    breadCrMain.addEventListener('click', backToHome);
}

const home = new Home();