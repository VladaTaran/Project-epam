const selectMain = document.getElementById('select-main');
const categoryArr = document.querySelectorAll('.article-category');
const articleTitle = document.querySelectorAll('.article-title');

function Search () {
    const searchForm = tagCreator('form', searchContainer, 'class', 'search', 'id', 'search'),
          searchInput = tagCreator('input', searchForm, 'class', 'search-input', 'type', 'search');
    searchInput.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const selectedValue = selectMain.options[selectMain.selectedIndex].value;
        Array.from(articleTitle).forEach(function(articleTitleText){
            const title = articleTitleText.textContent;
            const article = articleTitleText.parentNode.parentNode.parentNode;

            function hideShowCategory(categoryName) {
                if (selectedValue === categoryName ) {
                    categoryArr.forEach(category => {
                        if (selectedValue !== category.textContent && !title.toLowerCase().includes(term)) {
                            article.style.display = 'none';
                        } 
                        if (term == '') {
                            if(selectedValue == category.textContent ) {
                                category.parentNode.parentNode.parentNode.style.display = 'flex';
                            }
                        }
                    }) 
                }
            };
            if(selectedValue === 'All') {
                if(!title.toLowerCase().includes(term)) {
                    article.style.display = 'none';
                } else {
                    article.style.display = 'block';
                    mainPagination.reloadPagination();
                }
            } 
            hideShowCategory('Breakfast');
            hideShowCategory('Dinner');
            hideShowCategory('Lunch');
            hideShowCategory('Snack');
        });    
    });    
}

const search = new Search();


