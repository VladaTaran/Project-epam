const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById('input-email');
const inputSubject = document.getElementById('input-subject');
const inputMessage = document.getElementById('input-message');
const contactsButton = document.querySelector('.contacts-button');
const regEx = /\S+@\S+\.\S+/;
function requiredParam() {
   
    if (inputName.value.length === 0) {
        alert ("Please enter Your name");
        inputName.classList.add('red-input');
        inputName.scrollIntoView(true);
        inputName.onclick = function() {
            inputName.classList.remove('red-input');
        }
    } else if (inputEmail.value.lenth === 0 || !inputEmail.value.match(regEx) ) {
        alert ("Please enter correct email");
        inputEmail.classList.add('red-input');
        inputEmail.scrollIntoView(true);
        inputEmail.onclick = function() {
            inputEmail.classList.remove('red-input');
        }
    } else {
        alert('Thank You! Your email has been sent');
        inputName.classList.remove('red-input');
        inputEmail.classList.remove('red-input');
        inputName.value = '';
        inputEmail.value = '';
        inputSubject.value = '';
        inputMessage.value = '';
    }
}

contactsButton.addEventListener('click', requiredParam );