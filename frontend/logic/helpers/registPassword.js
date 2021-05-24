const showPasword = document.getElementById('password-sing-up');
const input = document.getElementById('PasswordInput_SignUp');

showPasword.addEventListener('click', () =>{
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        showPasword.classList.toggle('view');
        document.getElementById('password-confirm').setAttribute('type', 'text');
    } else {
        showPasword.classList.remove('view');
        input.setAttribute('type', 'password');
        document.getElementById('password-confirm').setAttribute('type', 'password');
    }
})