//validation on create account page

const usernameSignUp = document.getElementById("UserNameInput_SignUp").value;
const passwordSignUp = document.getElementById("PasswordInput_SignUp").value;
const confirmPassword = document.getElementById("ConfirmPasswordInput").value;
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitButton = document.getElementById("SignUpButton");
const validationPassword = /[0-9a-zA-Z]{6,}/;
const validationUsername = /[a-zA-Z0-9]((?!(.|))|.(?!(_|.))|[a-zA-Z0-9]){1,25}[a-zA-Z0-9]$/;

function isUsernameValid(username) {
    return validationUsername.test(username);
}

function isPasswordValid(password){
    return validationPassword.test(password);
}

submitButton.addEventListener("click", function (e) {
    let usernameValidation = isUsernameValid(usernameSignUp);
    let passwordValidation = isPasswordValid(passwordSignUp);
    if (!usernameValidation){
        usernameError.innerHTML = "Your login is not valid";
        usernameError.style.color = "#E63D3F";
    }
    if (!passwordValidation){
        passwordError.innerHTML = "Your password is not valid";
        passwordError.style.color = "#E63D3F";
    }
    console.log(passwordSignUp == confirmPassword);
    console.log( confirmPassword);
    console.log(passwordSignUp);
    if (passwordSignUp == confirmPassword){
        confirmPasswordError.innerHTML = "Check your password for differences";
        confirmPasswordError.style.color = "#E63D3F";
    }
});

//show password on registrationPage
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#PasswordInput_SignUp');
const confpassword = document.querySelector('#ConfirmPasswordInput');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type1 = password.getAttribute('type') === 'password' ? 'text' : 'password';
    const type2 = confpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type1);
    confpassword.setAttribute('type', type2);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


//show password on singIn