function RecipePage() {
    this.recipePageContainer = null; 
    
    this.createPageElements = function (obj,author,category ) {
            recipePage.style.display = 'none';
            this.recipePageContainer = tagCreator('div', recipePage, 'class', 'recipe-page-container');
            const breadCrumbs = new BreadCrumbs();
            breadCrumbs.createBc(this.recipePageContainer, obj.category.toUpperCase(), 'THEME/ ' );

            const recipePageHeader = tagCreator('div', this.recipePageContainer, 'class', 'recipe-page-header'),
                  ingredientsContainer = tagCreator('div', recipePageHeader, 'class', 'ingredients-container'),
                  recipeTitle = tagCreator('h1', ingredientsContainer, 'class', 'recipe-title');
            recipeTitle.appendChild(document.createTextNode(obj.title));
            const ingredients = tagCreator('ol', ingredientsContainer, 'class', 'ingredients-list'),
                  recipeImage = tagCreator('img', recipePageHeader, 'class', 'recipe-image', 'src', obj.src); 
              
            function createIngredients(li) {
                if (li) {
                    li.forEach(function(element){
                        let li = document.createElement('li');
                        li.setAttribute('class', 'ingredients-item');
                        li.innerHTML = element;
                        ingredients.appendChild(li);
                    })
                }
            }
            createIngredients(obj.ingredients);

            const recipeBody = tagCreator('div', this.recipePageContainer, 'class', 'recipe-body'),
                  recipeBodyArticle = tagCreator('p', recipeBody, 'class', 'recipe-body-article');
            recipeBodyArticle.appendChild(document.createTextNode(obj.postBody));
            recipeBody.appendChild(recipeBodyArticle);
            const recipeFooter = tagCreator('div', this.recipePageContainer, 'class', 'recipe-footer');
            recipeFooter.appendChild(author); 
            category.classList.remove('article-category');
            category.classList.add('recipe-page-category')
            recipeFooter.appendChild(category);
    } 
    this.showRecipePage = function() {
        let allRecipe = document.querySelectorAll('.recipe-page-container');
        allRecipe.forEach(el => {
            if ( el.childNodes[1].childNodes[0].childNodes[0].innerHTML !== this.parentNode.parentNode.childNodes[1].childNodes[0].innerText ) {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
            }
        });

        if ( recipePage.style.display === 'none') {
            recipePage.style.display = 'block';
            loginPageSection.style.display = 'none';
            userPageSection.style.display = 'none';
            recipe.forEach(el => el.style.display = 'none');
            aboutPageSection.style.display = 'none';
        } 
        else {
            recipePage.style.display = 'none';
        }
    }
}
