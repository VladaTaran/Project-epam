function BreadCrumbs () {
    this.createBc = function (parent, name, parentName) {
        const breadCrumbsTest = tagCreator('div', parent, 'class', 'bread-crumbs'),
        mainBreadCrumbsTest = tagCreator('span', breadCrumbsTest, 'class', 'bc-main');
        mainBreadCrumbsTest.innerHTML = 'MAIN/ ';
        mainBreadCrumbsTest.onclick = home.backToHome;
        if (parentName) {
            const breadCrumbsParent = tagCreator('span', breadCrumbsTest, 'class', 'bc-former' );
            breadCrumbsParent.innerHTML = parentName;
        }
        const breadCrumbsFormer = tagCreator('span', breadCrumbsTest, 'class', 'bc-former', 'id', 'bc-' + name);
        breadCrumbsFormer.innerHTML = name;
    }
}
