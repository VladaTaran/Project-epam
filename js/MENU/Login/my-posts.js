const myPostsButton = document.querySelector('.my-posts');
const categorySelect = document.querySelector('.category');

const categorySelectWp = categorySelect.cloneNode(true);

function myPosts () {
    myPostsButton.onclick = createPost;

    function createPost() {
        createPage();

    }

    function createPage() {
        userPageSection.childNodes.forEach(el=> el.style.display = 'none'); 
        //class = form container for write post
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
        
        const createButton = tagCreator('button', form, 'class', 'button-wp', 'type', 'submit');
        createButton.innerHTML = 'Publish';

       

    }
}

const createPost = new myPosts();