function AboutPage () {
    this.headerAbout = null;
    about.addEventListener('click', aboutPageElements);
     
    function aboutPageElements() {
        if ( !this.headerAbout ) {
        
            recipe.forEach(el => el.style.display = 'none');
            recipePage.style.display = 'none';
            loginPageSection.style.display = 'none';
            contactsPageSection.style.display = 'none';
            userPageSection.style.display = 'none';
            aboutPageSection.style.display = 'block';
    
            const breadCrumbs = new BreadCrumbs();
            breadCrumbs.createBc(aboutPageSection, about.textContent.toUpperCase() );

            this.headerAbout = tagCreator('div', aboutPageSection, 'class', 'header-about'),
                mainAbout = tagCreator('div', aboutPageSection, 'class', 'main-about'),
                gallery = tagCreator('div', aboutPageSection, 'class', 'gallery'),
                galleryFirstBlock = tagCreator('div', gallery, 'class', 'gallery-first-block'),
                gallerySecondBlock = tagCreator('div', gallery, 'class', 'gallery-second-block'),
                mainAboutTitle = tagCreator('h2', mainAbout, 'class', 'main-about-title');
            mainAboutTitle.innerHTML = 'About us';
        
        function createGallery (arr) {
            arr.forEach(function(obj) {
                const aboutArticle = tagCreator('p', mainAbout, 'class', 'about-article');
                aboutArticle.innerHTML = obj.textNode;
                for (let i = 0; i< 3; i++) {
                    const image = tagCreator('div', galleryFirstBlock, 'class', 'image-about-gallery');
                    image.style.backgroundImage = "url("+obj.galleryImg[i] +')';
                }
                for (let i = 3; i< 6; i++) {
                    const image = tagCreator('div', gallerySecondBlock, 'class', 'image-about-gallery');
                    image.style.backgroundImage = "url("+obj.galleryImg[i] +')';
                }
                const aboutContribute = tagCreator('p', aboutPageSection, 'class', 'about-article');
                aboutContribute.innerHTML = obj.textContribute;
            })
        }
            createGallery (aboutData);
        } else {
            recipePage.style.display = 'none';
            recipe.forEach(el => el.style.display = 'none');
            aboutPageSection.style.display = 'block';
            loginPageSection.style.display = 'none';
            contactsPageSection.style.display = 'none';
            userPageSection.style.display = 'none';
        }  
    }
}

const aboutPage = new AboutPage();