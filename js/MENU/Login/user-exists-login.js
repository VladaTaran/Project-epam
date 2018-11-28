const loginUserName =  document.querySelector('#login-user-name'),
      loginUserPassword = document.querySelector('#login-user-password');


let getUsersInStorage = localStorage.getItem('users-arr');
if (localStorage.getItem('users-arr') !== null) {
    getUsersInStorage = JSON.parse(getUsersInStorage);
    getUsersInStorage.forEach(el => users.push(el));
}
 
// console.log(Array.from(article).map(el => Number(el.id)));
// function jsonParse(jsonString, userData) {
//     const arr = JSON.parse(jsonString);
//     const unpublishPosts = [];
    


//         const articleIds = Array.from(article).map(obj => Number(obj.id));
//         var result;
//        for (let i = 0; i<articleIds.length; i++ ) {
//            for(let j = 0; j<arr.length; j++ ) {
//                if( articleIds[i] !== arr[j].postID)  {
//                 result =arr[j];
//                }
              
//            }
          
//        }
//        unpublishPosts.push(result);
//        console.log(unpublishPosts); 

        
//         // articleIds.map(num => {
//         //     console.log(el.postID);
//         //     if( num !== el.postID ) {
//         //         unpublishPosts.push(el);
//         //     }
//         // })

//     // console.log(unpublishPosts);
//     // console.log(arr);
//     myRecipe.createElements(unpublishPosts,userData);
//     mainPagination.reloadPagination();
// }
// // jsonParse(localStorage.getItem('posts-arr'), localStorage.getItem('users-arr'));
// // getUsersInStorage.forEach(el => users.push(el));

// console.log(users);




//////////////////////////////////////////////


