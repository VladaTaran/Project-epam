// function LoginPage () {
//     this.breadCrumbs = new BreadCrumbs();
//     this.signUpBody = null;
//     this.login = document.querySelector('#login');
//     this.login.addEventListener('click', createLoginPage);
    
//     function createLoginPage() {
//             if ( !this.signUpBody ){
//                 recipe.forEach(el => el.style.display = 'none');
//                 recipePage.style.display = 'none';
//                 aboutPageSection.style.display = 'none';
//                 contactsPageSection.style.display = 'none';
//                 loginPageSection.style.display = 'flex';
                
//                 this.signUpBody = tagCreator('div', loginPageSection, 'class', 'signup-body');
//                 const form =  tagCreator('form', this.signUpBody, 'class', 'signup-form'),
//                 signUpTitle =  tagCreator('span', form, 'class', 'signup-title');
//                 signUpTitle.innerHTML = 'Sign Up';
//                 const userName = tagCreator('input', form, 'class', 'signup-items', 'type', 'text');
//                 userName.setAttribute('placeholder', 'Username');
//                 userName.setAttribute('id', 'user-name');
//                 const email = tagCreator('input', form, 'class', 'signup-items', 'type', 'text');
//                 email.setAttribute('placeholder', 'E-mail');
//                 email.setAttribute('id', 'user-email');
//                 const password = tagCreator('input', form, 'class', 'signup-items', 'type', 'text');
//                 password.setAttribute('placeholder', 'Password');
//                 password.setAttribute('id', 'user-password');
//                 const passwordAgain = tagCreator('input', form, 'class', 'signup-items', 'type', 'text');
//                 passwordAgain.setAttribute('placeholder', 'Repeat password');
//                 const submit = tagCreator('input', form, 'class', 'signup-items', 'type', 'submit');
//                 submit.setAttribute('value', 'Sign up');
//                 submit.setAttribute('onclick', 'false');
            
//                 const loginForm =  tagCreator('div', loginPageSection, 'class', 'login-form'),
//                 loginTitle =  tagCreator('span', loginForm, 'class', 'login-title');
//                 loginTitle.innerHTML = 'Or';
//                 const buttonFb = tagCreator('button', loginForm, 'class', 'login-button fb'),
//                 buttonGoogle = tagCreator('button', loginForm, 'class', 'login-button gl'),
//                 buttonTwitter = tagCreator('button', loginForm, 'class', 'login-button tw');
//                 buttonFb.innerHTML = 'Log in with facebook';
//                 buttonGoogle.innerHTML = 'Log in with Google+';
//                 buttonTwitter.innerHTML = 'Log in with Twitter';

//             } else {
//                 recipePage.style.display = 'none';
//                 recipe.forEach(el => el.style.display = 'none');
//                 aboutPageSection.style.display = 'none';
//                 contactsPageSection.style.display = 'none';
//                 loginPageSection.style.display = 'flex';
//             }
//     }
//     // this.breadCrumbs.createBc(loginPageSection, '#login', 'LOGIN');
// }

// const loginPage = new LoginPage();

////////////////////////////////////////////////////////

function LoginPage () {
    this.breadCrumbs = new BreadCrumbs();
    this.signUpBody = null;
    const login = document.querySelector('#login');
    login.addEventListener('click', createLoginPage);
    const savedName = localStorage.getItem('user-name');
    this.container = null;

    function createElements(){
        this.signUpBody = tagCreator('div', loginPageSection, 'class', 'signup-body');
                const form =  tagCreator('form', this.signUpBody, 'class', 'signup-form'),
                signUpTitle =  tagCreator('span', form, 'class', 'signup-title');
                signUpTitle.innerHTML = 'Sign Up';
                const userName = tagCreator('input', form, 'class', 'signup-items', 'type', 'text');
                userName.setAttribute('placeholder', 'Username');
                userName.setAttribute('id', 'user-name');
                const email = tagCreator('input', form, 'class', 'signup-items', 'type', 'text');
                email.setAttribute('placeholder', 'E-mail');
                email.setAttribute('id', 'user-email');
                const password = tagCreator('input', form, 'class', 'signup-items', 'type', 'password');
                password.setAttribute('placeholder', 'Password');
                password.setAttribute('id', 'user-password');
                const passwordAgain = tagCreator('input', form, 'class', 'signup-items', 'type', 'password');
                passwordAgain.setAttribute('id', 'user-password-repeat');
                passwordAgain.setAttribute('placeholder', 'Repeat password');
                const submit = tagCreator('input', form, 'class', 'signup-items', 'type', 'submit');
                submit.setAttribute('value', 'Sign up');
                submit.setAttribute('id', 'sign-up');
                submit.setAttribute('onclick', 'false');
                const loginBody = tagCreator('div', loginPageSection, 'class', 'signup-body');
                const loginForm =  tagCreator('form', loginBody, 'class', 'login-form'),
                loginTitle =  tagCreator('span', loginForm, 'class', 'login-title');
                loginTitle.innerHTML = 'Or';
                const loginUserName = tagCreator('input', loginForm, 'class', 'signup-items', 'type', 'text');
                loginUserName.setAttribute('placeholder', 'Username');
                loginUserName.setAttribute('id', 'login-user-name');
                const loginPassword = tagCreator('input', loginForm, 'class', 'signup-items', 'type', 'password');
                loginPassword.setAttribute('placeholder', 'Password');
                loginPassword.setAttribute('id', 'login-user-password');
                const LoginSubmit = tagCreator('input', loginForm, 'class', 'signup-items', 'type', 'submit');
                LoginSubmit.setAttribute('value', 'Log in');
                LoginSubmit.setAttribute('onclick', 'false');
                LoginSubmit.setAttribute('id', 'log-in');

    }
    createElements();

    function createLoginPage() {
            if ( loginPageSection.style.display === 'none' ){
                recipe.forEach(el => el.style.display = 'none');
                recipePage.style.display = 'none';
                aboutPageSection.style.display = 'none';
                contactsPageSection.style.display = 'none';
                loginPageSection.style.display = 'flex';                
            } else {
                recipePage.style.display = 'none';
                recipe.forEach(el => el.style.display = 'none');
                aboutPageSection.style.display = 'none';
                contactsPageSection.style.display = 'none';
                loginPageSection.style.display = 'flex';
            }
            
            if (savedName) {
                login.innerHTML = 'My Profile';
                if (!this.container) {
                    this.container =  new UserPage (savedName);
                    loginPageSection.style.display = 'none';
                    userPageSection.style.display = 'block';
                } else {
                    loginPageSection.style.display = 'none';
                    userPageSection.style.display = 'block';
                }                
                
            } else {
                loginPageSection.style.display = 'flex';
                userPageSection.style.display = 'none';
                login.innerHTML = 'Login';
            }
            // console.log(savedName);
    }
    // this.breadCrumbs.createBc(loginPageSection, '#login', 'LOGIN');
}

const loginPage = new LoginPage();