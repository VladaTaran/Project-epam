function BreadCrumbs () {
    this.createBc = function (parent, hrefId, name) {
        // console.log(parent);
        const breadCrumbsTest = tagCreator('div', parent, 'class', 'bread-crumbs'),
              mainBreadCrumbsTest = tagCreator('a', breadCrumbsTest, 'id',  'back-home');
        mainBreadCrumbsTest.innerHTML = 'MAIN/ ';
        const breadCrumbsFormer = tagCreator('a', breadCrumbsTest, 'href', hrefId);
        breadCrumbsFormer.innerHTML = name;
        if (this.secondName) {
            const breadCrumbsSecond = tagCreator('a', breadCrumbsTest, 'href', secondHrefId);
            breadCrumbsSecond.innerHTML = this.secondName;
        }
    }
}


///////////////////////////
// const mainBreadCrumbsTest = tagCreator('a', breadCrumbs, 'class', 'hide-bc', 'id',  'back-home');
//     mainBreadCrumbsTest.innerHTML = 'MAIN/ ';

// function BreadCrumbs () {
//     this.breadCrumbsFormer = null;

//     this.createBc = function (hrefId, name, secondName, secondHrefId) {
//         if (!this.breadCrumbsFormer) {
//             this.breadCrumbsFormer = tagCreator('a', breadCrumbs, 'href', hrefId);
//             this.breadCrumbsFormer.innerHTML = name;
//                 if (secondName) {
//                     const breadCrumbsSecond = tagCreator('a', breadCrumbs, 'href', secondHrefId);
//                     breadCrumbsSecond.innerHTML = secondName;
//                 }
//             breadCrumbs.style.display = 'block';
//         } else {
//             breadCrumbs.style.display  = 'block';
//         } 
//         // else if (breadCrumbs.style.display === 'none') {
//         //     breadCrumbs.style.display  = 'block';
//         // } 
//     }
// }
