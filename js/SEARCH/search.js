// const articleTitle = document.querySelectorAll('.article-title');
// function Search () {
//     const searchForm = tagCreator('form', searchContainer, 'class', 'search', 'id', 'search'),
//           searchInput = tagCreator('input', searchForm, 'class', 'search-input', 'type', 'search');
//     searchInput.addEventListener('keyup', function(e) {
//         const term = e.target.value.toLowerCase();
//         Array.from(articleTitle).forEach(function(articleTitleText){
//             const title = articleTitleText.textContent;
//             const article = articleTitleText.parentNode.parentNode.parentNode;
//             if(!title.toLowerCase().includes(term)) {
//                 article.style.display = 'none';
//             } 
//             else if (title.toLowerCase().includes(term)){
//                 article.classList.add('show');
//                 if(article.id <= postsPerPage ) {
//                     const articlePerPage = [];
//                     articlePerPage.push(article);
//                     articlePerPage.forEach(el => el.style.display = 'block');
//                 }
//             }
//         })
//     });
// }

// const search = new Search();

//////////////////////////////////////////////////////////////////////////////////////////
const selectMain = document.getElementById('select-main');

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
            else if (title.toLowerCase().includes(term)){
                // article.classList.add('show');
                if(article.id <= postsPerPage ) {
                    const articlePerPage = [];
                    articlePerPage.push(article);
                    articlePerPage.forEach(el => el.style.display = 'block');
                }


                //// вставить иф, который будет обрабатывать если выбрана категория
            } 
        })
    });


}

const search = new Search();


