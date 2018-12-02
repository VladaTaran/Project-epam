const savedPostStr = localStorage.getItem('posts');
const savedPostArr = JSON.parse(savedPostStr);
const allPosts = savedPostArr ? posts.concat(savedPostArr) : posts;

const savedUserStr = localStorage.getItem('users-arr');
const savedUserArr = JSON.parse(savedUserStr);
const allUsers = savedUserArr ? users.concat(savedUserArr) : users;


function Recipe() {
    this.readMore = null;
    this.recipeClick = new RecipePage();
    this.author = null;
    this.createElements = function(posts, users) {
        
        posts.forEach(post => {
            const article = tagCreator('div', main, 'class', 'article', 'id', post.postID),
                  articleImage = tagCreator('div', article, 'class', 'article-image'),
                  image = tagCreator('img', articleImage, 'alt', 'article-image','src', post.src),
                  articleItem = tagCreator('article', article, 'class', 'article-item'),
                  articleAuthor = tagCreator('div', articleItem, 'class', 'article-author');

            users.forEach (user => {
                if( user.userID === post.userID ) {
                    this.author = tagCreator('a', articleAuthor, 'class', 'author-link', 'href', user.authorHref);
                    const avatar = tagCreator('img', this.author, 'class', 'author-avatar', 'src', user.userAvatarSrc);
                    avatar.setAttribute('alt', 'author avatar');
                    const userName = tagCreator('span', this.author,'class', 'author-name');
                    userName.appendChild(document.createTextNode(user.userName));
                }
            });
            const category = tagCreator('a', articleAuthor, 'class', 'article-category', 'href', post.categoryHref);
            category.appendChild(document.createTextNode(post.category)); 
            const articleLink = tagCreator('a', articleItem, 'class', 'article-link','href', post.href),
                 title = tagCreator('h2', articleLink, 'class', 'article-title');
            title.appendChild(document.createTextNode(post.title));
            const articleText = tagCreator('p', articleItem, 'class', 'article-text');
            
            if (post.postBody.length > 260) {
                let myArticleText = post.postBody.slice(0,261);         
                articleText.appendChild(document.createTextNode(myArticleText + '...'));
                this.readMore = tagCreator('span', articleText,'class', 'read-more');
                this.readMore.appendChild(document.createTextNode('Read More')); 
                this.readMore.addEventListener('click', this.recipeClick.showRecipePage);
            } else {
                articleText.appendChild(document.createTextNode(post.postBody));
            };
            
            this.recipeClick.createPageElements(post, this.author.cloneNode(true), category.cloneNode(true));
            title.addEventListener('click', this.recipeClick.showRecipePage);
        });
    }
}

const myRecipe = new Recipe();
myRecipe.createElements(allPosts, allUsers);
 