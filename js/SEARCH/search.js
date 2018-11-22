const articleTitle = document.querySelectorAll('.article-title');

function Search () {
    const searchForm = tagCreator('form', searchContainer, 'class', 'search', 'id', 'search'),
          searchInput = tagCreator('input', searchForm, 'class', 'search-input', 'type', 'search');
    searchInput.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        Array.from(articleTitle).forEach(function(articleTitleText){
            const title = articleTitleText.textContent;
            const article = articleTitleText.parentNode.parentNode.parentNode;
            if(!title.toLowerCase().includes(term)) {
                article.style.display = 'none';
            } 
            // else if (title.toLowerCase().includes(term)){
            //     if (!article.firstChild.classList.contains('search-article-img')) {
            //     // article.style.display = 'block';
            //     article.style.display = 'flex';
            //     article.firstChild.classList.add('search-article-img');  
            //     article.firstChild.firstChild.style.height = "100%";
            //     } 
            else {
                article.classList.add('show');
                if(article.id <= postsPerPage ) {
                    const articlePerPage = [];
                    articlePerPage.push(article);
                    articlePerPage.forEach(el => el.style.display = 'block');
                }
            }
            // if(title.toLowerCase().includes('')) {
            //     console.log('empty!');
            //     // article.style.display = 'block';
            //     article.firstChild.classList.remove('search-article-img');
            // }
            
            // }
        })
    });
}

const search = new Search();
