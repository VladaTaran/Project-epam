function Pagination () {
    let currentPageIndex = 1; 
    let pages = Math.ceil( allPosts.length/postsPerPage );
   
    let article = document.querySelectorAll('.article');
    
    article.forEach(el => el.style.display = 'none');

    for (let i = 0; i < postsPerPage; i++) {
        article[i].style.display = 'block';
    }

    const firstPage = tagCreator('div', pagination, 'class', 'pagination-btn current', 'id', 'pg-1');
    firstPage.innerHTML = '1';
    const intervalBefore = tagCreator('div', pagination, 'class', 'pagination-btn');
    intervalBefore.innerHTML = '...';
    intervalBefore.style.display = 'none';
    
    const prevPage = tagCreator('div', pagination, 'class', 'pagination-btn prev-page');
    prevPage.style.display = 'none';
    const currentPage = tagCreator('div', pagination, 'class', 'pagination-btn current-page');
    currentPage.style.display = 'none';
    const nextPage = tagCreator('div', pagination, 'class', 'pagination-btn next-page');
    nextPage.style.display = 'none';
    const intervalAfter = tagCreator('div', pagination, 'class', 'pagination-btn');
    intervalAfter.innerHTML = '...';
    intervalAfter.style.display = 'none';
    let lastPage = tagCreator('div', pagination, 'class', 'pagination-btn', 'id', 'pg-' + pages);
    lastPage.innerHTML = pages;
    
    firstPage.addEventListener('click', showPage);
    prevPage.addEventListener('click', showPage);
    currentPage.addEventListener('click', showPage);
    nextPage.addEventListener('click', showPage);
    lastPage.addEventListener('click', showPage);

        if (pages === 2) {
            lastPage.innerHTML = '2';
        }

        if (pages > 2) {
            nextPage.innerHTML = '2';
            nextPage.setAttribute('id', 'pg-' + (currentPageIndex + 1));
            nextPage.style.display = 'block';
            intervalAfter.style.display = pages == 3 ? 'none' : 'block';       
            lastPage.style.display = 'block';
    }

    function showPage () {
        
        article = document.querySelectorAll('.article');
        let currentPageElement = document.querySelector('.current');
        currentPageIndex = +this.getAttribute('id').slice(3);
        currentPageElement.classList.remove('current');
        
        if (currentPageIndex === 1) {
            prevPage.style.display = 'none';
            intervalBefore.style.display = 'none';
            nextPage.style.display = 'block';
            nextPage.innerHTML = currentPageIndex + 1;
            nextPage.setAttribute('id', 'pg-' + (currentPageIndex + 1));
            currentPage.style.display = 'none';
            intervalAfter.style.display = pages == 3 ? 'none' : 'block';
            firstPage.classList.add('current');
            
        } else if (currentPageIndex === pages) {
            prevPage.style.display = 'block';
            intervalBefore.style.display = pages == 3 ? 'none' : 'block';
            nextPage.style.display = 'none';
            currentPage.style.display = 'none';
            intervalAfter.style.display = 'none';
            prevPage.innerHTML = currentPageIndex - 1;
            prevPage.setAttribute('id', 'pg-' + (pages-1));
            lastPage.classList.add('current');

        } else if (currentPageIndex < pages && currentPageIndex > 1 ) {
            currentPage.style.display = 'block';
            currentPage.setAttribute('id', 'pg-' + currentPageIndex);
            currentPage.innerHTML = currentPageIndex;
            currentPage.classList.add('current'); 
            if (currentPageIndex > 2) {
                prevPage.style.display = 'block';
                prevPage.setAttribute('id', 'pg-' + (currentPageIndex-1));
                prevPage.innerHTML = (currentPageIndex-1);
            } else {
                prevPage.style.display = 'none';
            }
            if (currentPageIndex <= (pages-2)) {
                nextPage.style.display = 'block';
                nextPage.setAttribute('id', 'pg-' + (currentPageIndex+1));
                nextPage.innerHTML = (currentPageIndex + 1);
            } else {
                nextPage.style.display = 'none';
            }
            intervalBefore.style.display = currentPageIndex > 3 ? 'block' : 'none';
            intervalAfter.style.display = currentPageIndex <= (pages-3) ? 'block' : 'none';
        }
        article.forEach(el => {
            const elPage = Math.ceil(el.id/postsPerPage);
            el.style.display  = elPage === currentPageIndex ? 'block' : 'none';
        })
    }

    this.reloadPagination = function() {
        pages = Math.ceil( allPosts.length/postsPerPage );
        // TODO remove dublicates
        let currentPageElement = document.querySelector('.current');
        
        if(lastPage.classList.contains('current') && allPosts.length % postsPerPage === 1) {
            lastPage.classList.remove('current');
            currentPage.classList.add('current');
            currentPage.style.display = 'block';
            currentPage.innerHTML = +currentPageElement.textContent;
        }
        lastPage.setAttribute('id', 'pg-' + pages);
        lastPage.innerHTML = pages;
        article = document.querySelectorAll('.article');
        let newArticle = article[article.length - 1];
        
        const elPage = Math.ceil(newArticle.id/postsPerPage);
      
        newArticle.style.display  = elPage === currentPageIndex ? 'block' : 'none';
    }
}
const mainPagination = new Pagination(allPosts);

