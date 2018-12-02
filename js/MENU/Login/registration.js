const userName = document.querySelector('#user-name'),
      userPassword = document.querySelector('#user-password');

const usersFromStorageStr = localStorage.getItem('users-arr');
const usersFromStorage = usersFromStorageStr ? JSON.parse(usersFromStorageStr) : [];
const repeatPassword = document.querySelector('#user-password-repeat'),
      userEmail = document.querySelector('#user-email'),
      signupButton = document.querySelector('#sign-up');

const logout = document.querySelector('.log-out');

function store() {
    localStorage.setItem('user-name', userName.value);
    localStorage.setItem('user-password', userPassword.value);
    localStorage.setItem('repeat-password', repeatPassword.value);
    localStorage.setItem('user-email', userEmail.value);
  
    checkData(users);

}

//ckeck with json
function checkData (users) {
    let storingName = localStorage.getItem('user-name');
    let storingPassword = localStorage.getItem('user-password');
    let storingRepeatPassword = localStorage.getItem('repeat-password');
    let storingEmail = localStorage.getItem('user-email');
    let isExists = false;
    let isValidEmail = false;

    if (!storingEmail.match(regEx)) {
        alert ('Please write correct email');
        delete localStorage['user-name'];
        delete localStorage['user-email'];
        userEmail.classList.add('red-input');
        userEmail.onclick = function () {
            userEmail.classList.remove('red-input');
        }
    } else {
        isValidEmail = true;
    }

    users.forEach(obj => {
        if (obj.userName === storingName) {
            isExists = true;
            delete localStorage['user-name'];
            delete localStorage['user-email'];
            alert('Please choose another name');
        }
        if( obj.email === storingEmail ) {
            isExists = true;
            delete localStorage['user-email'];
            delete localStorage['user-name'];
            alert ('User with this email is already registered. Please LOGIN or choose another email');
        }     
        return isExists;
    });
 
    if (isExists || !isValidEmail) {
    } else if (storingPassword === storingRepeatPassword  ) {
        createUser();

        localStorage.setItem('users-arr', JSON.stringify(usersFromStorage));
        
        loginPageSection.style.display = 'none';
        userPageSection.style.display = 'block';
        login.innerHTML = 'Hello, ' + storingName;
        login.style.textTransform = 'capitalize';

    } else {
        alert('Please, make sure the password you entered is the same');
    } 
    
    
    function createUser() {
       const maxId = Math.max.apply(Math, users.map(el => el.userID));

        if (isExists === false) {
            let userId = maxId + 1;
            users.push({
                userID: userId,
                userName: storingName,
                password: storingPassword,
                email: storingEmail,
                authorHref: '#',
                userAvatarSrc: "../img/user-avatar.png",
            });

            usersFromStorage.push({
                "userID": userId,
                "userName": storingName,
                "password": storingPassword,
                "email": storingEmail,
                "authorHref": '#',
                "userAvatarSrc": "../img/user-avatar.png",
            });
        } 
        if( users && usersFromStorage ) {
            return users, usersFromStorage;
        }
    }
}

signupButton.onclick = store;