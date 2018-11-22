function OnClick() {
    // this.breadCrumbs = new BreadCrumbs();
    this.recipePageContainer = null; 
    this.showRecepiePage = function () {
        // const hideForRecipe = document.querySelectorAll('.recipe');
        if ( !this.recipePageContainer ) {

            recipe.forEach(el => el.style.display = 'none');
            loginPageSection.style.display = 'none';
            aboutPageSection.style.display = 'none';
            recipePage.style.display = 'block';
        // hideForRecipe.forEach(el => el.style.display = 'none');
        // const recipePage = document.querySelector('.recipe-page');
            this.recipePageContainer = tagCreator('div', recipePage, 'class', 'recipe-page-container');
            const breadCrumbs = tagCreator('div', this.recipePageContainer, 'class', 'bread-crumbs'),
                  mainBreadCrumbs = tagCreator('a', breadCrumbs, 'href', '#food-slider');
            mainBreadCrumbs.innerHTML = 'MAIN/ ';
            const currentCategory = tagCreator('a', breadCrumbs, 'href', '#header');
            currentCategory.innerHTML = this.obj.category;

            const recipePageHeader = tagCreator('div', this.recipePageContainer, 'class', 'recipe-page-header'),
                  ingredientsContainer = tagCreator('div', recipePageHeader, 'class', 'ingredients-container'),
                  recipeTitle = tagCreator('h1', ingredientsContainer, 'class', 'recipe-title');
            recipeTitle.appendChild(document.createTextNode(this.obj.title));
            const ingredients = tagCreator('ol', ingredientsContainer, 'class', 'ingredients-list'),
                  recipeImage = tagCreator('img', recipePageHeader, 'class', 'recipe-image', 'src', this.obj.src); 
              
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
            createIngredients(this.obj.ingredients);

            const recipeBody = tagCreator('div', this.recipePageContainer, 'class', 'recipe-body'),
                  recipeBodyArticle = tagCreator('p', recipeBody, 'class', 'recipe-body-article');
            recipeBodyArticle.appendChild(document.createTextNode(this.obj.postBody));
            recipeBody.appendChild(recipeBodyArticle);
            const recipeFooter = tagCreator('div', this.recipePageContainer, 'class', 'recipe-footer');
            recipeFooter.appendChild(this.author);
            recipeFooter.appendChild(this.category);
       
        } else {

            loginPageSection.style.display = 'none';
            recipe.forEach(el => el.style.display = 'none');
            aboutPageSection.style.display = 'none';
            // this.recipePageContainer.style.display = 'block';
            recipePage.style.display = 'block';
            // searchContainer.style.display = 'none';
            // recipePage.style.display = 'block';
        }
    }
    
}