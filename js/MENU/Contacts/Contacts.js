function Contacts () {
    this.contactsContainer = null;
    contacts.addEventListener('click', contactsPageElements);
     
    function contactsPageElements() {
        if ( !this.contactsContainer ) {
        
            recipe.forEach(el => el.style.display = 'none');
            recipePage.style.display = 'none';
            userPageSection.style.display = 'none';
            loginPageSection.style.display = 'none';
            aboutPageSection.style.display = 'none';
            contactsPageSection.style.display = 'block';
    
            this.contactsContainer = tagCreator('div', contactsPageSection, 'class', 'contacts-container');
            const breadCrumbs = new BreadCrumbs();
            breadCrumbs.createBc(this.contactsContainer, contacts.textContent.toUpperCase() );
            const contactsBody = tagCreator('div', this.contactsContainer, 'class', 'contacts-body'),
                contactsForm = tagCreator('form', contactsBody, 'class', 'contacts-form'),
                contactsTitle = tagCreator('h2', contactsForm, 'class', 'contacts-title');
            contactsTitle.innerHTML = 'Contact us';
            const contactsText = tagCreator('span', contactsForm, 'class', 'contacts-text');
            contactsText.innerHTML = 'If you want to get in touch, here’s where you do it. ';
            let inputNameLabel, inputName, 
                inputEmailLabel, inputEmail,
                inputSubjectLabel, inputSubject,
                inputMessageLabel, inputMessage;
                
            function createForm (nameLabel, parent, id, inputName, text) {
                nameLabel = tagCreator('label', parent, 'class',  'contacts-input-label', 'for', id);
                nameLabel.innerHTML = text;
                inputName = tagCreator('input', parent, 'class', 'contacts-input', 'id', id);
            }
        
            createForm (inputNameLabel, contactsForm, 'input-name', inputName, 'Your Name (required)');
            createForm (inputEmailLabel, contactsForm, 'input-email', inputEmail, 'Your Email (required)');
            createForm (inputSubjectLabel, contactsForm, 'input-subject', inputSubject, 'Subject');
            createForm (inputMessageLabel, contactsForm, 'input-message', inputMessage, 'Your Message');
                
            const sendBtn = tagCreator('button', contactsForm, 'class', 'contacts-button', 'type', 'submit');
            sendBtn.innerHTML = 'Send';

            const mapContainer = tagCreator('div', contactsBody, 'class', 'map-container');
            const iframe = tagCreator('iframe', mapContainer, 'class', 'map');

            if(navigator.onLine) {
                iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.340828364454!2d-98.26761958555413!3d29.242937582180947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865ce3c6e2a42049%3A0xa0dfb9d0696a236c!2sLas+Lagunas!5e0!3m2!1suk!2sua!4v1542721721380');
            } else {
                iframe.classList.add('no-internet');
            }
                    
        } else {
            recipePage.style.display = 'none';
            recipe.forEach(el => el.style.display = 'none');
            aboutPageSection.style.display = 'none';
            loginPageSection.style.display = 'none';
            userPageSection.style.display = 'none';
            contactsPageSection.style.display = 'block';
        }  
    }       
}
    
    const contactUsPage = new Contacts();