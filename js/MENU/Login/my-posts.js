const myPostsButton = document.querySelector('.my-posts');
const categorySelect = document.querySelector('.category');
const logOutBtn = document.querySelector('.log-out-container');
const categorySelectWp = categorySelect.cloneNode(true);
const postContainer = [];
      


const backBtn = document.getElementById('back-wp');
// const article = document.getElementById('1');
// console.log(article);

function myPosts () {
    // this.formContainer = null;
    myPostsButton.onclick = createPage;
    const recipeArr = [];

    function createPage () {
        userPageSection.childNodes.forEach(el=> el.style.display = 'none'); 
        logOutBtn.style.display = 'block';
        backBtn.classList.remove('hide');
        //class = form container for write post
        const formContainer = tagCreator('div', userPageSection, 'class', 'form-container-wp');
        // this.formContainer.style.display = 'none';
      
        const form = tagCreator('form', formContainer, 'class', 'form-wp');
        const labelTitle = tagCreator('label', form, 'class', 'label-wp');
        labelTitle.innerHTML = 'Write title here';
        const inputTitle = tagCreator('input', labelTitle, 'class', 'input-title-wp');

        const spanIngredients = tagCreator('span', form, 'class', 'label-wp');
        spanIngredients.innerHTML = 'Write ingredients here';
        const instruction = tagCreator('p', form, 'class', 'instruction-wp');
        instruction.innerHTML = 'Please separate each ingredient with a comma';
        const inputIngredients = tagCreator('textarea', form, 'class', 'input-wp');

        const spanRecipe = tagCreator('span', form, 'class', 'label-wp');
        spanRecipe.innerHTML = 'Write here your recipe';
        const contentRecipe = tagCreator('textarea', form, 'class', 'input-wp');

        form.appendChild(categorySelectWp);
        
        // const imgForm = tagCreator('form', this.form, 'class', 'img-form', 'method', 'post');
        // imgForm.setAttribute('enctype', 'multipart/form-data');
        // const addFile =  tagCreator('input', imgForm, 'class', 'add-file', 'type', 'file');
        // addFile.setAttribute('accept', 'image/jpeg');

        const addImg = tagCreator('input', form, 'class', 'input-img', 'value', 'add src');
        const createButton = tagCreator('button', form, 'class', 'button-wp', 'type', 'button');
        createButton.setAttribute('onclick', 'return false');
        createButton.innerHTML = 'Publish';
        
        backBtn.onclick = function() {
            userPageSection.childNodes.forEach(el=> el.style.display = 'flex');
            formContainer.style.display = 'none';
            backBtn.classList.add('hide');
        }



        function createArticle(arr, userData) {
            // const articles = document.querySelectorAll('.article');
           myRecipe.createElements(arr,userData);

           
           posts.push(arr[0]);
           
        //    mainPagination.pages = Math.ceil( posts.length/postsPerPage );
           mainPagination.reloadPagination();
        // const deletPrevPag = document.querySelectorAll('.pag');
        // deletPrevPag.forEach(el => el.style.display = 'none');

        //    mainPagination.pagination( Math.ceil( (posts.length + recipeArr.length)/postsPerPage) );
        //    const myPostPagination = new Pagination(recipeArr);
        //    console.log(mainPagination);
        //    console.log(userData) 
            // console.log(myRecipe);
            // Поменять весь localStorage на SessionStorage
        }


        function savingPost() {
    
            let selectedValue = categorySelectWp.options[categorySelectWp.selectedIndex].value;
            // const id = main.childNodes.length + 1;
            const id = Math.max.apply(Math, posts.map(el => el.postID)) + 1;
            
            const userIdInPost = users.filter(el => el.userName===localStorage.getItem('user-name'))[0].userID;
            const storingUserId = localStorage.setItem('user-id', userIdInPost);  
            const newPostObj = {
                postID: id,
                src: addImg.value,
                // src:  "../img/POSTS/dinner/dinner_3.jpg",
                userID: userIdInPost,
                category: selectedValue,
                categoryHref: '#',
                href: '#',
                title: inputTitle.value,
                postBody: contentRecipe.value,
                ingredients:[ inputIngredients.value, 'some ingredients'],
            };
            
            const userInform = users.filter(el => {
                if (el.userName===localStorage.getItem('user-name')) {
                    return el;
                }
            });
            recipeArr.push(newPostObj);
            // posts.push(newPostObj);
            if (recipeArr.length > 1) {
                // var b = recipeArr.splice(1);
                //// !!!!!!!!!!!!!!!! попробовать в вызов функции поставить сразу слайс/////
                createArticle(recipeArr.splice(1), userInform);

            } else {
                createArticle(recipeArr, userInform);
            }

           

            // userPageSection.style.display = 'none';
            // slider.style.display = 'block';
            // main.style.display = 'block';
            // pagination.style.display = 'flex';
            // searchContainer.style.display = 'flex';
            // createArticle(recipeArr, users);
            // console.log(document.getElementById('11'));
        }
        
        createButton.onclick = savingPost;
        
    }
   
}
const createPost = new myPosts();







// function writtePost () {
//     const selectedValue = categorySelectWp.options[categorySelectWp.selectedIndex].value;
    
//     const id = main.childNodes.length + 1;

//     const newPostObj = {
//         postID: id,
//         src:  "../img/POSTS/dinner/dinner_3.jpg",
//         userID: 2,
//         category: selectedValue,
//         categoryHref: '#',
//         href: '#',
//         title: inputTitle.value,
//         postBody: contentRecipe.value,
//         ingredients:[ inputIngredients.value],
//     };
    
//     console.log(newPostObj);
//     postContainer.push(newPostObj);
//     // posts.push(newPostObj);
//     // const myRecipe2 = new Recipe();
    
//     // myRecipe.createElements(postContainer, users);
// }

// function createPost() {
//     createPage();
//     if (formContainer.style.display === 'none') {
//         formContainer.style.display = 'flex'; 
//     }
//     // createButton.onclick = writtePost;
//     console.log(createButton);
//     createButton.addEventListener('onclick', writtePost);   
// }
