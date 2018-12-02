const myPostsButton = document.querySelector('.my-posts');
const categorySelect = document.querySelector('.category');
const logOutBtn = document.querySelector('.log-out-container');
const categorySelectWp = categorySelect.cloneNode(true);

const postsFromStorageStr = localStorage.getItem('posts');
const postsFromStorage = postsFromStorageStr ? JSON.parse(postsFromStorageStr) : [];
      
const backBtn = document.getElementById('back-wp');

function myPosts () {
    myPostsButton.onclick = createPage;
    const recipeArr = [];

    function createPage () {
        userPageSection.childNodes.forEach(el=> el.style.display = 'none'); 
        logOutBtn.style.display = 'block';
        backBtn.classList.remove('hide');
        const formContainer = tagCreator('div', userPageSection, 'class', 'form-container-wp');
      
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

        function createArticle(newPost, userData) {
            const publishPost = [newPost];
            postsFromStorage.push(newPost);
            allPosts.push(newPost);
            const postToAdd = JSON.stringify(postsFromStorage);
            localStorage.setItem('posts', postToAdd);
            myRecipe.createElements(publishPost,userData);
            mainPagination.reloadPagination();

            slider.style.display = 'block';
            main.style.display = 'block';
            pagination.style.display = 'flex';
            searchContainer.style.display = 'flex';
            userPageSection.style.display = 'none';  
            inputTitle.value = '';
            inputIngredients.value = '';
            contentRecipe.value = '';
            addImg.value = '';
        }

        function savingPost() {
            let selectedValue = categorySelectWp.options[categorySelectWp.selectedIndex].value;
            const id = Math.max.apply(Math, allPosts.map(el => el.postID)) + 1;
            
            const userIdInPost = users.filter(el => el.userName===localStorage.getItem('user-name'))[0].userID;
            const storingUserId = localStorage.setItem('user-id', userIdInPost);  
            const newPostObj = {
                postID: id,
                src: addImg.value,
                userID: userIdInPost,
                category: selectedValue,
                categoryHref: '#',
                href: '#',
                title: inputTitle.value,
                postBody: contentRecipe.value,
                ingredients: inputIngredients.value.split(', '),
            };
            
            const userInform = users.filter(el => {
                if (el.userName===localStorage.getItem('user-name')) {
                    return el;
                }
            });

            createArticle(newPostObj, userInform);
        }      
        createButton.onclick = savingPost;
    }
}
const createPost = new myPosts();

