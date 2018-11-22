function SearchByCategory() {
    const searchForm = tagCreator('form', searchContainer, 'class', 'search', 'id', 'search-category'),
          select = tagCreator('select', searchForm, 'class', 'category', 'name', 'category'),
          defaultOption = tagCreator('option', select, 'class', 'option', 'value', 'All');
          defaultOption.innerHTML = 'All';
    // const postsPerPage = 4;
    this.createOptionCategory = function(arr) {
        const allCategory = arr.map(el => el.category); 
        const category = new Set(allCategory);
        for(el of category) {
            const option = tagCreator('option', select, 'class', 'option', 'value', el);
            option.innerHTML = el;
        }        
        // let myArr = [];
        // for(let i=0; i<allCategory.length; i++){
        //     let isUnique = true;
        //     for(let j = 0; j <myArr.length; j++) {
        //         if (allCategory[i] == myArr[j]) {
        //             isUnique = false;
        //         }   
        //     }
        //     if(isUnique) {
        //         myArr.push(allCategory[i]);
        //     }
        // }
    };
      
    const options = document.querySelectorAll('option');
    select.onchange = function(e) {
        const selectedValue = select.options[select.selectedIndex].value;
        
        const category = document.querySelectorAll('.article-category');
        category.forEach(el => {
            const article = el.parentNode.parentNode.parentNode; 
            if (el.textContent === selectedValue) {
                article.style.display = 'flex';
                article.firstChild.classList.add('search-article-img');  
                article.firstChild.firstChild.style.height = "100%";
            } else if (selectedValue === 'All'){
                if(article.id <= postsPerPage ) {
                    const articlePerPage = [];
                    articlePerPage.push(article);
                    articlePerPage.forEach(el => el.style.display = 'block');
                
                } else {
                    article.style.display = 'none';
                }
                if ( article.firstChild.classList.contains('search-article-img')) {
                    article.firstChild.classList.remove('search-article-img')
                }
            } else {
                article.style.display = 'none';
            }
        })
    }
}     

const searhCategory = new SearchByCategory();
searhCategory.createOptionCategory(posts);