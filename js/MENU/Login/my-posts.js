const myPostsButton = document.querySelector('.my-posts');
const categorySelect = document.querySelector('.category');
const logOutBtn = document.querySelector('.log-out-container');
const categorySelectWp = categorySelect.cloneNode(true);
const postContainer = [];

// const article = document.getElementById('1');
// console.log(article);

function myPosts () {
    this.formContainer = null;
    this.form = null;
    this.inputTitle = null;
    this.inputIngredients = null;
    this.contentRecipe = null;
    this.addImg = null;
    this.createButton = null;

    myPostsButton.onclick = createPost;

    function createPage() {
        userPageSection.childNodes.forEach(el=> el.style.display = 'none'); 
        logOutBtn.style.display = 'block';
        //class = form container for write post
        this.formContainer = tagCreator('div', userPageSection, 'class', 'form-container-wp');
        this.formContainer.style.display = 'none';
        this.form = tagCreator('form', this.formContainer, 'class', 'form-wp');
        const labelTitle = tagCreator('label', this.form, 'class', 'label-wp');
        labelTitle.innerHTML = 'Write title here';
        this.inputTitle = tagCreator('input', labelTitle, 'class', 'input-title-wp');

        const spanIngredients = tagCreator('span', this.form, 'class', 'label-wp');
        spanIngredients.innerHTML = 'Write ingredients here';
        const instruction = tagCreator('p', this.form, 'class', 'instruction-wp');
        instruction.innerHTML = 'Please separate each ingredient with a comma';
        this.inputIngredients = tagCreator('textarea', this.form, 'class', 'input-wp');

        const spanRecipe = tagCreator('span', this.form, 'class', 'label-wp');
        spanRecipe.innerHTML = 'Write here your recipe';
        this.contentRecipe = tagCreator('textarea', this.form, 'class', 'input-wp');

        this.form.appendChild(categorySelectWp);
        
        // const imgForm = tagCreator('form', this.form, 'class', 'img-form', 'method', 'post');
        // imgForm.setAttribute('enctype', 'multipart/form-data');
        // const addFile =  tagCreator('input', imgForm, 'class', 'add-file', 'type', 'file');
        // addFile.setAttribute('accept', 'image/jpeg');

        this.addImg = tagCreator('input', this.form, 'class', 'input-img', 'value', 'add src');
        this.createButton = tagCreator('button', this.form, 'class', 'button-wp', 'type', 'submit');
        // this.createButton.setAttribute('onclick', 'return false');
        this.createButton.innerHTML = 'Publish';
    }

    function writtePost () {
        const selectedValue = categorySelectWp.options[categorySelectWp.selectedIndex].value;
        
        const id = main.childNodes.length + 1;

        const newPostObj = {
            postID: id,
            src:  "../img/POSTS/dinner/dinner_3.jpg",
            userID: 2,
            category: selectedValue,
            categoryHref: '#',
            href: '#',
            title: inputTitle.value,
            postBody: contentRecipe.value,
            ingredients:[ inputIngredients.value],
        };
        
        console.log(newPostObj);
        postContainer.push(newPostObj);
        // posts.push(newPostObj);
        // const myRecipe2 = new Recipe();
        
        // myRecipe.createElements(postContainer, users);
    }

    function createPost() {
        createPage();
        if (formContainer.style.display === 'none') {
            formContainer.style.display = 'flex'; 
        }
        // createButton.onclick = writtePost;
        console.log(createButton);
        createButton.addEventListener('onclick', writtePost);   
    }

}

const createPost = new myPosts();