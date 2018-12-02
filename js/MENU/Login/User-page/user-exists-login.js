const loginUserName =  document.querySelector('#login-user-name'),
      loginUserPassword = document.querySelector('#login-user-password');


let getUsersInStorage = localStorage.getItem('users-arr');
if (localStorage.getItem('users-arr') !== null) {
    getUsersInStorage = JSON.parse(getUsersInStorage);
    getUsersInStorage.forEach(el => users.push(el));
}



