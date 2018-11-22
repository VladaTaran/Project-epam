function Recipe() {
    this.readMore = null;
    
    this.createElements = function(arr) {
        arr.forEach(obj => {
            const article = tagCreator('div', main, 'class', 'article','id', obj.postID),
                  articleImage = tagCreator('div', article, 'class', 'article-image'),
                  image = tagCreator('img', articleImage, 'alt', 'article image','src', obj.src),
                  articleItem = tagCreator('article', article, 'class', 'article-item'),
                  articleAuthor = tagCreator('div', articleItem, 'class', 'article-author'),
                  author = tagCreator('a', articleAuthor, 'class', 'author-link', 'href', obj.authorHref),
                  avatar = tagCreator('img', author, 'class', 'author-avatar', 'src', obj.userAvatarSrc);
            avatar.setAttribute('alt', 'author avatar');
            const userName = tagCreator('span', author,'class', 'author-name');
            userName.appendChild(document.createTextNode(obj.userName));
            const category = tagCreator('a', articleAuthor, 'class', 'article-category', 'href', obj.categoryHref);
            category.appendChild(document.createTextNode(obj.category));
            const articleLink = tagCreator('a', articleItem, 'class', 'article-link','href', obj.href),
                 title = tagCreator('h2', articleLink, 'class', 'article-title');
            title.appendChild(document.createTextNode(obj.title));

            const articleText = tagCreator('p', articleItem, 'class', 'article-text');
            if (obj.postBody.length > 260) {
                let myArticleText = obj.postBody.slice(0,261);         
                articleText.appendChild(document.createTextNode(myArticleText + '...'));
                this.readMore = tagCreator('span', articleText,'class', 'read-more');
                this.readMore.appendChild(document.createTextNode('Read More')); 
            } else {
                articleText.appendChild(document.createTextNode(obj.postBody));
                };
                
            function showRecepiePage() {
                const hideForRecipe = document.querySelectorAll('.recipe');
                hideForRecipe.forEach(el => el.style.display = 'none');
                const recipePage = document.querySelector('.recipe-page'),
                      breadCrumbs = tagCreator('div', recipePage, 'class', 'bread-crumbs'),
                      mainBreadCrumbs = tagCreator('a', breadCrumbs, 'href', '#food-slider');
                mainBreadCrumbs.innerHTML = 'MAIN/ ';
                const currentCategory = tagCreator('a', breadCrumbs, 'href', '#header');
                currentCategory.innerHTML = obj.category;
                const recipePageHeader = tagCreator('div', recipePage, 'class', 'recipe-page-header'),
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
                
                const recipeBody = tagCreator('div', recipePage, 'class', 'recipe-body'),
                      recipeBodyArticle = tagCreator('p', recipeBody, 'class', 'recipe-body-article');
                recipeBodyArticle.appendChild(document.createTextNode(obj.postBody));
                recipeBody.appendChild(recipeBodyArticle);
                const recipeFooter = tagCreator('div', recipePage, 'class', 'recipe-footer');
                recipeFooter.appendChild(author);
                recipeFooter.appendChild(category);
            }   
            this.readMore.onclick = showRecepiePage;
            title.onclick = showRecepiePage;            
        })
    }
}

const myRecipe = new Recipe();
myRecipe.createElements(posts);