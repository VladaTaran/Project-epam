function BreadCrumbs () {
    this.breadCrumbsFormer = null;
    
    this.createBc = function (parent, name, parentName) {

        const breadCrumbsTest = tagCreator('div', parent, 'class', 'bread-crumbs'),
        mainBreadCrumbsTest = tagCreator('span', breadCrumbsTest, 'class', 'bc-main');
        mainBreadCrumbsTest.innerHTML = 'MAIN/ ';
        
        if (parentName) {
            const breadCrumbsParent = tagCreator('span', breadCrumbsTest, 'class', 'bc-former' );
            breadCrumbsParent.innerHTML = parentName;
        }

        this.breadCrumbsFormer = tagCreator('span', breadCrumbsTest, 'class', 'bc-former', 'id', 'bc-' + name);
        this.breadCrumbsFormer.innerHTML = name;
    }
}
