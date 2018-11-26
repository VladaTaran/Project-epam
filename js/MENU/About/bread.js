const breadCrumbsTest = tagCreator('div', breadCrumbs, 'class', 'bread-crumbs'),
        mainBreadCrumbsTest = tagCreator('a', breadCrumbsTest, 'id',  'back-home');
        mainBreadCrumbsTest.innerHTML = 'MAIN/ ';

function BreadCrumbs () {
    this.breadCrumbsFormer = null;
    this.createBc = function (hrefId, name, secondName) {
        breadCrumbs.style.display = 'none';
        this.breadCrumbsFormer = tagCreator('a', breadCrumbsTest, 'href', hrefId, 'id', 'bc-' + name);
        this.breadCrumbsFormer.setAttribute('class', 'bc-former');
        // this.breadCrumbsFormer.style.display = 'none';
        this.breadCrumbsFormer.innerHTML = name;
        if (secondName) {
            const breadCrumbsSecond = tagCreator('a', breadCrumbsTest, 'href', secondHrefId);
            breadCrumbsSecond.innerHTML = secondName;
        }
        // breadCrumbsTest.style.display = 'block';
        //    console.log(this.breadCrumbsFormer.id.slice(3).toUpperCase());
        // if (breadCrumbsFormer.id.slice(3).toUpperCase() === name.toUpperCase()) {
            
        //     breadCrumbs.style.display = 'block';
        // } else {
        //     breadCrumbs.style.display = 'none';
        // }
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
