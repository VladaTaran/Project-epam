function UserPage() {
    // this.createElement = function(name) {
        loginPageSection.style.display = 'none';
        userPageSection.style.display = 'none';
        
        const logoutContainer = tagCreator('div', userPageSection, 'class', 'log-out-container', 'type', 'submit');
        const backBtn = tagCreator('button', logoutContainer, 'class', 'button-wp hide', 'id', 'back-wp');
        backBtn.innerHTML = 'Back to profile';
        const logOut = tagCreator('button', logoutContainer, 'class', 'log-out','value', 'Log out');
        logOut.innerHTML = 'Log out';
        const container = tagCreator('div', userPageSection, 'class', 'container');
        
        const userInfo = tagCreator('div', container, 'class', 'user-info'),
              avatarContainer = tagCreator('div', userInfo, 'class', 'avatar-container');
            //   avatar = tagCreator('img', container, 'class', 'avatar');
        const loggedName =  tagCreator('span', userInfo, 'class', 'user-page-name');
              loggedName.innerHTML = localStorage.getItem('user-name');
        const savedRecipe = tagCreator('div', container, 'class', 'saved-recipe'),
              savedRecipeIcon = tagCreator('span', savedRecipe, 'class', 'user-page-icon');
              savedRecipeIcon.innerHTML = '&#9733;';
        const myPosts= tagCreator('div', container, 'class', 'my-posts'),
              myPostsIcon = tagCreator('span', myPosts, 'class', 'user-page-icon');
              myPostsIcon.innerHTML = '&#9997;';
              
    function deletData() {
        loginPageSection.style.display = 'flex';
        userPageSection.style.display = 'none';
        
        delete localStorage['user-name'];
        delete localStorage['user-password'];
        delete localStorage['repeat-password'];
        delete localStorage['user-email'];
        delete localStorage['user-id'];
        // console.log(localStorage);
    }
    // console.log(localStorage);
    logOut.onclick = deletData;
        
    // }
}

const myPage = new UserPage();