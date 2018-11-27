function Home () {

    this.home = document.querySelector('#home');
    // const breadCrMain = document.querySelectorAll('.bc-main');
    // console.log(breadCrMain);
    
    function backToHome(e) {     
 
        if (aboutPageSection.style.display === 'block') {
            aboutPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (recipePage.style.display !== 'none') {
            recipePage.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (loginPageSection.style.display !== 'none') {
            loginPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (contactsPageSection.style.display !== 'none') {
            contactsPageSection.style.display = 'none';
            userPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } else if (userPageSection.style.display !== 'none' ) {
            userPageSection.style.display = 'none';
            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
        } 
    }
    this.home.addEventListener('click', backToHome);
    // breadCrMain.addEventListener('click', backToHome);
    // breadCrMain.forEach(el => el.onclick = backToHome);
    // console.log(breadCrMain);
}

const home = new Home();