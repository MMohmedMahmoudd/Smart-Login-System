document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('sign-up-form-element');
    const signInForm = document.getElementById('sign-in-form-element');
    const toggleButton = document.getElementById('toggle-form');
    const secondButton = document.getElementById('second-tog');
    const logoutButton = document.getElementById('logout-button');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateSignUp()) {
                signUp();
            }
        });

        document.getElementById('sign-up-username').addEventListener('input', function() {
            validate(this, /^[a-zA-Z0-9]{3,}$/);
        });
        document.getElementById('sign-up-email').addEventListener('input', function() {
            validateEmail();
        });
        document.getElementById('sign-up-password').addEventListener('input', function() {
            validate(this, /^[A-Za-z\d]{8,}$/);
        });
    }

    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();
            signIn();
        });

        document.getElementById('sign-in-email').addEventListener('input', function() {
            validate(this, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        });
        document.getElementById('sign-in-password').addEventListener('input', function() {
            validate(this, /.{8,}/);
        });
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            toggleForm();
        });
    }
    if (secondButton) {
        secondButton.addEventListener('click', function() {
            secondToggle();
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            logout();
        });
    }

    if (window.location.pathname.endsWith('home.html')) {
        const username = localStorage.getItem('username');
        if (!username) {
            window.location.href = 'index.html';
        } else {
            document.getElementById('greeting').textContent = `Welcome, ${username}!`;
        }
    }
});

function validate(element, regex) {
    const isValid = regex.test(element.value);
    if (isValid) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    }
    return isValid;
}

function validateEmail() {
    const email = document.getElementById('sign-up-email');
    const emailError = document.getElementById('sign-in-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const storedEmail = localStorage.getItem('email');

    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return false;
    } else if (email.value === storedEmail) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emailError.textContent = 'Email already exists.';
        emailError.style.display = 'block';
        return false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        emailError.style.display = 'none';
        return true;
    }
}

function validateSignUp() {
    const isUsernameValid = validate(document.getElementById('sign-up-username'), /^[a-zA-Z0-9]{3,}$/);
    const isEmailValid = validateEmail();
    const isPasswordValid = validate(document.getElementById('sign-up-password'), /^[A-Za-z\d]{8,}$/);
    return isUsernameValid && isEmailValid && isPasswordValid;
}

function signUp() {
    const username = document.getElementById('sign-up-username').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Registration successful! Please sign in.');
    toggleForm();
}

function signIn() {
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedUsername = localStorage.getItem('username');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('username', storedUsername);
        window.location.href = 'home.html';
    } else {
        const signInEmailError = document.getElementById('sign-in-email').nextElementSibling;
        const signInPasswordError = document.getElementById('sign-in-password').nextElementSibling;

        if (email !== storedEmail) {
            signInEmailError.textContent = 'Invalid email.';
            signInEmailError.style.display = 'block';
        } else {
            signInEmailError.style.display = 'none';
        }

        if (password !== storedPassword) {
            signInPasswordError.textContent = 'Invalid password.';
            signInPasswordError.style.display = 'block';
        } else {
            signInPasswordError.style.display = 'none';
        }
    }
}

function toggleForm() {
    const signUpForm = document.getElementById('sign-up-form');
    const signInForm = document.getElementById('sign-in-form');

    if (signUpForm.style.display === 'none') {
        signUpForm.style.display = 'flex';
        signInForm.style.display = 'none';
    } else {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'flex';
    }
}

function secondToggle() {
    const signUpForm = document.getElementById('sign-up-form');
    const signInForm = document.getElementById('sign-in-form');

    if (signUpForm.style.display === 'flex') {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'flex';
    } else {
        signUpForm.style.display = 'flex';
        signInForm.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}
