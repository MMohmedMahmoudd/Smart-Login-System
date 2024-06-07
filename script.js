// document.addEventListener('DOMContentLoaded', function() {
//     const signUpForm = document.getElementById('sign-up-form-element');
//     const signInForm = document.getElementById('sign-in-form-element');
//     const toggleButton = document.getElementById('toggle-form');
//     const signUpFormContainer = document.getElementById('sign-up-form');
//     const signInFormContainer = document.getElementById('sign-in-form');
//     const logoutButton = document.getElementById('logout-button');

//     if (signUpForm) {
//         signUpForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             signUp();
//         });
//     }

//     if (signInForm) {
//         signInForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             signIn();
//         });
//     }

//     if (toggleButton) {
//         toggleButton.addEventListener('click', function() {
//             toggleForm();
//         });
//     }

//     if (logoutButton) {
//         logoutButton.addEventListener('click', function() {
//             logout();
//         });
//     }

//     if (window.location.pathname.endsWith('home.html')) {
//         const username = localStorage.getItem('username');
//         if (!username) {
//             window.location.href = 'index.html';
//         } else {
//             document.getElementById('greeting').textContent = `Hello, ${username}!`;
//         }
//     }
// });

// function signUp() {
//     const username = document.getElementById('sign-up-username').value;
//     const email = document.getElementById('sign-up-email').value;
//     const password = document.getElementById('sign-up-password').value;

//     if (username && email && password) {
//         localStorage.setItem('username', username);
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
//         alert('Registration successful! Please sign in.');
//         toggleForm();
//     } else {
//         alert('Please fill out all fields.');
//     }
// }

// function signIn() {
//     const email = document.getElementById('sign-in-email').value;
//     const password = document.getElementById('sign-in-password').value;

//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
//     const storedUsername = localStorage.getItem('username');

//     if (email === storedEmail && password === storedPassword) {
//         localStorage.setItem('username', storedUsername);
//         window.location.href = 'home.html';
//     } else {
//         alert('Invalid email or password.');
//     }
// }

// function toggleForm() {
//     const signUpForm = document.getElementById('sign-up-form');
//     const signInForm = document.getElementById('sign-in-form');
//     const toggleButton = document.getElementById('toggle-form');

//     if (signUpForm.style.display === 'none') {
//         signUpForm.style.display = 'block';
//         signInForm.style.display = 'none';
//         toggleButton.textContent = 'Switch to Sign In';
//     } else {
//         signUpForm.style.display = 'none';
//         signInForm.style.display = 'block';
//         toggleButton.textContent = 'Switch to Sign Up';
//     }
// }

// function logout() {
//     localStorage.removeItem('username');
//     window.location.href = 'index.html';
// }
// _____________________________________________________________________________
// document.addEventListener('DOMContentLoaded', function() {
//     const signUpForm = document.getElementById('sign-up-form-element');
//     const signInForm = document.getElementById('sign-in-form-element');
//     const toggleButton = document.getElementById('toggle-form');
//     const logoutButton = document.getElementById('logout-button');

//     if (signUpForm) {
//         signUpForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             if (validateSignUp()) {
//                 signUp();
//             }
//         });

//         document.getElementById('sign-up-username').addEventListener('input', validateUsername);
//         document.getElementById('sign-up-email').addEventListener('input', validateEmail);
//         document.getElementById('sign-up-password').addEventListener('input', validatePassword);
//     }

//     if (signInForm) {
//         signInForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             signIn();
//         });

//         document.getElementById('sign-in-email').addEventListener('input', validateSignInEmail);
//         document.getElementById('sign-in-password').addEventListener('input', validateSignInPassword);
//     }

//     if (toggleButton) {
//         toggleButton.addEventListener('click', function() {
//             toggleForm();
//         });
//     }

//     if (logoutButton) {
//         logoutButton.addEventListener('click', function() {
//             logout();
//         });
//     }

//     if (window.location.pathname.endsWith('home.html')) {
//         const username = localStorage.getItem('username');
//         if (!username) {
//             window.location.href = 'index.html';
//         } else {
//             document.getElementById('greeting').textContent = `Hello, ${username}!`;
//         }
//     }
// });

// function validateUsername() {
//     const username = document.getElementById('sign-up-username').value;
//     const usernameError = document.getElementById('username-error');
//     const usernameRegex = /^[a-zA-Z0-9]{3,}$/;

//     if (!usernameRegex.test(username)) {
//         usernameError.textContent = 'Username must be at least 3 characters long and contain only letters and numbers.';
//         usernameError.style.display = 'block';
//         return false;
//     } else {
//         usernameError.style.display = 'none';
//         return true;
//     }
// }

// function validateEmail() {
//     const email = document.getElementById('sign-up-email').value;
//     const emailError = document.getElementById('email-error');
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//         emailError.textContent = 'Please enter a valid email address.';
//         emailError.style.display = 'block';
//         return false;
//     } else {
//         emailError.style.display = 'none';
//         return true;
//     }
// }

// function validatePassword() {
//     const password = document.getElementById('sign-up-password').value;
//     const passwordError = document.getElementById('password-error');
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//     if (!passwordRegex.test(password)) {
//         passwordError.textContent = 'Password must be at least 8 characters long, contain at least one letter and one number.';
//         passwordError.style.display = 'block';
//         return false;
//     } else {
//         passwordError.style.display = 'none';
//         return true;
//     }
// }

// function validateSignUp() {
//     return validateUsername() && validateEmail() && validatePassword();
// }

// function validateSignInEmail() {
//     const email = document.getElementById('sign-in-email').value;
//     const emailError = document.getElementById('sign-in-email-error');
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//         emailError.textContent = 'Please enter a valid email address.';
//         emailError.style.display = 'block';
//         return false;
//     } else {
//         emailError.style.display = 'none';
//         return true;
//     }
// }

// function validateSignInPassword() {
//     const password = document.getElementById('sign-in-password').value;
//     const passwordError = document.getElementById('sign-in-password-error');

//     if (password.length < 8) {
//         passwordError.textContent = 'Password must be at least 8 characters long.';
//         passwordError.style.display = 'block';
//         return false;
//     } else {
//         passwordError.style.display = 'none';
//         return true;
//     }
// }

// function signUp() {
//     const username = document.getElementById('sign-up-username').value;
//     const email = document.getElementById('sign-up-email').value;
//     const password = document.getElementById('sign-up-password').value;

//     localStorage.setItem('username', username);
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
//     alert('Registration successful! Please sign in.');
//     toggleForm();
// }

// function signIn() {
//     const email = document.getElementById('sign-in-email').value;
//     const password = document.getElementById('sign-in-password').value;

//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
//     const storedUsername = localStorage.getItem('username');

//     if (email === storedEmail && password === storedPassword) {
//         localStorage.setItem('username', storedUsername);
//         window.location.href = 'home.html';
//     } else {
//         const signInEmailError = document.getElementById('sign-in-email-error');
//         const signInPasswordError = document.getElementById('sign-in-password-error');

//         if (email !== storedEmail) {
//             signInEmailError.textContent = 'Invalid email.';
//             signInEmailError.style.display = 'block';
//         } else {
//             signInEmailError.style.display = 'none';
//         }

//         if (password !== storedPassword) {
//             signInPasswordError.textContent = 'Invalid password.';
//             signInPasswordError.style.display = 'block';
//         } else {
//             signInPasswordError.style.display = 'none';
//         }
//     }
// }

// function toggleForm() {
//     const signUpForm = document.getElementById('sign-up-form');
//     const signInForm = document.getElementById('sign-in-form');
//     const toggleButton = document.getElementById('toggle-form');

//     if (signUpForm.style.display === 'none') {
//         signUpForm.style.display = 'block';
//         signInForm.style.display = 'none';
//         toggleButton.textContent = 'Switch to Sign In';
//     } else {
//         signUpForm.style.display = 'none';
//         signInForm.style.display = 'block';
//         toggleButton.textContent = 'Switch to Sign Up';
//     }
// }

// function logout() {
//     localStorage.removeItem('username');
//     window.location.href = 'index.html';
// }
// _______________________________________________________________________________________

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
            validate(this, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
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
        secondButton.addEventListener('click', function(){
            secondToggle()
        })
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
            document.getElementById('greeting').textContent = `Wellcome, ${username}!`;
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

function validateSignUp() {
    const isUsernameValid = validate(document.getElementById('sign-up-username'), /^[a-zA-Z0-9]{3,}$/);
    const isEmailValid = validate(document.getElementById('sign-up-email'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
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
    const toggleButton = document.getElementById('toggle-form');

    if (signUpForm.style.display === 'none') {
        signUpForm.style.display = 'flex';
        signInForm.style.display = 'none';
    } else {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'flex';
    }
}
function secondToggle(){
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
