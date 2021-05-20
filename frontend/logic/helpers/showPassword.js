import '../../scss/modalWindow.scss'

//show passwond in registartion page
/*const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#PasswordInput_SignIn');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
*/

//show password in modal window
let showPasword = document.getElementById('show-password-old');
let input = document.getElementById('password-input-old');

showPasword.addEventListener('click', () =>{
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        showPasword.classList.toggle('view');
        document.getElementById('show-password-new').classList.toggle('view');
        document.getElementById('password-input-new').setAttribute('type', 'text');
    } else {
        showPasword.classList.remove('view');
        input.setAttribute('type', 'password');
        document.getElementById('show-password-new').classList.remove('view');
        document.getElementById('password-input-new').setAttribute('type', 'password');
    }
})