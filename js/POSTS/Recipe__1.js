function Recipe() {
    this.readMore = null;
    this.recipeClick = new RecipePage();

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
                
                this.recipeClick.createPageElements(obj, author.cloneNode(true), category.cloneNode(true));

                this.readMore.addEventListener('click', this.recipeClick.showRecipePage);
                title.addEventListener('click', this.recipeClick.showRecipePage);
        })
        
          
    }
}

const myRecipe = new Recipe();
myRecipe.createElements(posts);