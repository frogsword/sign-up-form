let createButton = document.querySelector('.btn');

createButton.addEventListener('click', () => {
    let password = document.querySelector('#user_password');
    let confirm = document.querySelector('#confirm_password');
    let passwordError = document.querySelectorAll('.pass-error');

    let firstName = document.querySelector('#first_name');
    let firstError = document.querySelector('.first-error');
    let lastName = document.querySelector('#last_name');
    let lastError = document.querySelector('.last-error');

    let eMail = document.querySelector('#user_email');
    let eMailError = document.querySelector('.email-error');
    let pNum = document.querySelector('#phone_number');
    let pNumError = document.querySelector('.phone-error');



    if (password.value !== confirm.value) {
        password.style.border = 'red';
        confirm.style.borderColor = 'red';
        passwordError[0].textContent = 'Passwords do not match';
        passwordError[0].style.color = 'red';
        passwordError[1].textContent = 'Passwords do not match';
        passwordError[1].style.color = 'red';
    } else {
        password.style.borderColor = '#634087';
        confirm.style.borderColor = '#634087';
        passwordError[0].textContent = '';
        passwordError[1].textContent = ''; 
    }

    if (password.value === '') {
        password.style.borderColor = 'red';
        passwordError[0].textContent = 'Invalid Password';
        passwordError[0].style.color = 'red';
    } else {
        password.style.borderColor = '#634087';
        passwordError[0].textContent = '';
    }

    if (confirm.value === '') {
        confirm.style.borderColor = 'red';
        passwordError[1].textContent = 'Invalid Password';
        passwordError[1].style.color = 'red';
    } else {
        confirm.style.borderColor = '#634087';
        passwordError[1].textContent = '';
    }

    if (firstName.value.length === 0) {
        firstName.style.borderColor = 'red';
        firstError.style.color = 'red';
        firstError.textContent = 'Invalid Name';
    } else {
        firstName.style.borderColor = '#634087';
        firstError.textContent = '';
    }

    if (lastName.value === '') {
        lastName.style.borderColor = 'red';
        lastError.style.color = 'red';
        lastError.textContent = 'Invalid Name';
    } else {
        lastName.style.borderColor = '#634087';
        lastError.textContent = '';
    }

    if (!eMail.value.includes('@')) {
        eMail.style.borderColor = 'red';
        eMailError.style.color = 'red';
        eMailError.textContent = 'Invalid Email';
    } else {
        eMail.style.borderColor = '#634087';
        eMailError.textContent = '';
    }

    if (pNum.value === '') {
        pNum.style.borderColor = 'red';
        pNumError.style.color = 'red';
        pNumError.textContent = 'Invalid Phone Number';
    } else {
        pNum.style.borderColor = '#634087';
        pNumError.textContent = '';
    }
});