// const userName = document.querySelector('#user-name'),
//       userPassword = document.querySelector('#user-password'),

//       repeatPassword = document.querySelector('#user-password-repeat'),
//       userEmail = document.querySelector('#user-email'),
//       signupButton = document.querySelector('#sign-up');

// const logout = document.querySelector('.log-out');

// function store() {
//     localStorage.setItem('user-name', userName.value);
//     localStorage.setItem('user-password', userPassword.value);
//     localStorage.setItem('repeat-password', repeatPassword.value);
//     localStorage.setItem('user-email', userEmail.value);
  
//     checkData(users);

// }

// //ckeck with json
// function checkData (users) {
//     let storingName = localStorage.getItem('user-name');
//     let storingPassword = localStorage.getItem('user-password');
//     let storingRepeatPassword = localStorage.getItem('repeat-password');
//     let storingEmail = localStorage.getItem('user-email');

//     if (storingPassword === storingRepeatPassword) {
//         createUser();
//         loginPageSection.style.display = 'none';
//         userPageSection.style.display = 'block';
//     } else {
//         alert('Please, make sure the password you entered is the same');
//     }
    
//     function createUser() {
//         let isExists = false;
//         users.forEach(obj => {
//             if (obj.userName !== storingName && obj.password !== storingPassword && obj.email !== storingEmail) {
//                 isExists = false;
//                 return isExists;
//             } else {
//                 isExists = true;
//                 return isExists;
//             }
//         });

//        const maxId = Math.max.apply(Math, users.map(el => el.userID));

//         if (isExists === false) {
//             let userId = maxId + 1;
//             users.push({
//                 userID: userId,
//                 userName: storingName,
//                 password: storingPassword,
//                 email: storingEmail,
//                 authorHref: '#',
//                 userAvatarSrc: "../img/user-avatar.png",
//             });
//         }
//         return users;
//     }
// }

// signupButton.onclick = store;

////////////////////////////////////////////
const userName = document.querySelector('#user-name'),
      userPassword = document.querySelector('#user-password'),
      usersInStorage = [],

      repeatPassword = document.querySelector('#user-password-repeat'),
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
    users.forEach(obj => {
        if (obj.userName === storingName) {
            isExists = true;
            delete localStorage['user-name'];
            alert('Please choose another name');
        }
        if( obj.email === storingEmail ) {
            isExists = true;
            delete localStorage['user-email'];
            alert ('User with this email is already registered. Please LOGIN or choose another email');
        }       
        return isExists;
    });

    if (isExists===true) {
    }
    else if (storingPassword === storingRepeatPassword ) {
        createUser();
        localStorage.setItem('users-arr', JSON.stringify(usersInStorage) );
        loginPageSection.style.display = 'none';
        userPageSection.style.display = 'block';
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

            usersInStorage.push({
                "userID": userId,
                "userName": storingName,
                "password": storingPassword,
                "email": storingEmail,
                "authorHref": '#',
                "userAvatarSrc": "../img/user-avatar.png",
            });
        } 
        if( users && usersInStorage ) {
            return users, usersInStorage;
        }
    }
}

signupButton.onclick = store;