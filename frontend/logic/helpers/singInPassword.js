import '../../scss/autorization.scss';

const passwordSingIn = document.getElementById('password-sing-in');
const fieldInput = document.getElementById('PasswordInput_SignIn');
passwordSingIn.addEventListener('click', () =>{
    if (fieldInput.getAttribute('type') == 'password') {
        fieldInput.setAttribute('type', 'text');
        passwordSingIn.classList.toggle('view');
    } else {
        passwordSingIn.classList.remove('view');
        fieldInput.setAttribute('type', 'password');
    }
})