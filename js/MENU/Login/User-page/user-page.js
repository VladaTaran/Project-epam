function UserPage() {
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
      const loggedName =  tagCreator('span', userInfo, 'class', 'user-page-name');

      const savedRecipe = tagCreator('div', container, 'class', 'saved-recipe'),
            savedRecipeIcon = tagCreator('span', savedRecipe, 'class', 'user-page-icon');
            savedRecipeIcon.innerHTML = '&#9733;';
      const myPosts= tagCreator('div', container, 'class', 'my-posts'),
            myPostsIcon = tagCreator('div', myPosts, 'class', 'user-page-icon writte-post');
              
      function deletData() {
            loginPageSection.style.display = 'block';
            userPageSection.style.display = 'none';
            login.innerHTML = 'Login';
            login.style.textTransform = 'uppercase';
        
            delete localStorage['user-name'];
            delete localStorage['user-password'];
            delete localStorage['repeat-password'];
            delete localStorage['user-email'];
            delete localStorage['user-id'];
      }
      logOut.onclick = deletData;

      if (loggedName) {
      loggedName.innerHTML = userName.value;
      }
      console.log(userName.value);
}

const myPage = new UserPage();
const loggedName = document.querySelector('user-page-name');