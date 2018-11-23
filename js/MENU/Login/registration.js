// const userName = document.querySelector('#user-name'),
//       userPassword = document.querySelector('#user-password'),
//       loginUserName = document.querySelector('#login-user-name'),
//       loginPassword = document.querySelector('#login-user-password'),
//       signupButton = document.querySelector('#sign-up'),
//       loginButton = document.querySelector('#log-in');

// // storing input from register-form
// function store() {
//     // if !userdata
//     localStorage.setItem('user-name', userName.value);
//     localStorage.setItem('user-password', userPassword.value);
// }

// function check() {
//     const savedName = localStorage.getItem('user-name');
//     const savedPsw = localStorage.getItem('user-password');
//     if (loginUserName.value == savedName && loginPassword.value == savedPsw) {
//         this.user =  null;
//         if (!this.user) {
//             console.log('You are log in!');
            
//             this.user = new UserPage(savedName);
//             // this.user.createElement(savedName);   
            
//         } else {
//             loginPageSection.style.display = 'none';
//         }
//     } else {
//         console.log('Try onece more!');
//     }
// }
// signupButton.addEventListener('click', store);
// loginButton.addEventListener('click', check);
// delete localStorage['user-name', 'user-password'];
//////////////////////////////////////////////////////////////


const userName = document.querySelector('#user-name'),
      userPassword = document.querySelector('#user-password'),
      
      repeatPassword = document.querySelector('#user-password-repeat'),
      userEmail = document.querySelector('#user-email'),
      signupButton = document.querySelector('#sign-up'),

      loginUserName = document.querySelector('#login-user-name'),
      loginPassword = document.querySelector('#login-user-password'),
      loginButton = document.querySelector('#log-in');
      console.log(userPassword)

const logout = document.querySelector('.log-out');

// storing input from register-form
function store() {
    localStorage.setItem('user-name', userName.value);
   
    console.log(userPassword.value);
    localStorage.setItem('user-password', userPassword.value);
    localStorage.setItem('repeat-password', repeatPassword.value);
    localStorage.setItem('user-email', userEmail.value);
    console.log(userEmail.value);
    checkData(users);

}

//ckeck with json
function checkData (userData) {
    let storingName = localStorage.getItem('user-name');
    let storingPassword = localStorage.getItem('user-password');
    let storingRepeatPassword = localStorage.getItem('repeat-password');
    let storingEmail = localStorage.getItem('user-email');

    if (storingPassword === storingRepeatPassword) {
        createUser();
    } else {
        alert('Please, make sure the password you entered is the same');
    }
    
    function createUser() {
        let isExists = false;
        userData.forEach(obj => {
            if (obj.userName !== storingName && obj.password !== storingPassword && obj.email !== storingEmail) {
               
                isExists = true;
                return isExists;
            } else {
                isExists = false;
                return isExists;
            }
        });

       const maxId = Math.max.apply(Math, userData.map(el => el.userID));

        if (isExists === true) {
            let userId = maxId + 1;
            userData.push({
                'userID': userId,
                'userName': storingName,
                'password': storingPassword,
                'email': storingEmail
            });
        }
        

        // const myUser = new UserPage();
        return userData;
    }
    console.log(loginPageSection);
        loginPageSection.style.display = 'none';
        userPageSection.style.display = 'block';
}

signupButton.onclick = store;

console.log(users);

// logout.addEventListener('click', deletData);


// function check() {
//     const savedName = localStorage.getItem('user-name');
//     const savedPsw = localStorage.getItem('user-password');
//     if (loginUserName.value == savedName && loginPassword.value == savedPsw) {
//         this.user =  null;
//         if (!this.user) {
//             console.log('You are log in!');
            
//             this.user = new UserPage(savedName);
//             // this.user.createElement(savedName);   
            
//         } else {
//             loginPageSection.style.display = 'none';
//         }
//     } else {
//         console.log('Try onece more!');
//     }
// }
// signupButton.addEventListener('click', store);
// loginButton.addEventListener('click', check);