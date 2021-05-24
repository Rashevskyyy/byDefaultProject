import '../../scss/modalWindow.scss'

//show password in modal window
const showPasword = document.getElementById('show-password-old');
const input = document.getElementById('password-input-old');

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