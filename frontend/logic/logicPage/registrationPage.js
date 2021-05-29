import '../../scss/createAccount.scss';
// import '../header/localization';
import '../helpers/registPassword';
import {REGURL, createOptions, postRequest} from "../helpers/requests"
import {validateLogin, validatePassword} from '../logicPage/validation/validation'
const regInit = () => {
    const loginInput = document.querySelector('#UserNameInput_SignUp');
    const passwordInput = document.querySelector('#PasswordInput_SignUp');
    const passwordConfirm = document.getElementById('password-confirm');
    const signButton = document.querySelector('#SignUpButton');
    const fieldsForErrror = document.getElementById('error');
    signButton.addEventListener("click", () => {
        const user = {
            login: loginInput.value,
            password: passwordInput.value,
            passwordConfirm: passwordConfirm.value
        }
        let checkPassword = validatePassword(user.password) === validatePassword(user.passwordConfirm);
        const regOptions = createOptions(user);
        if(validateLogin(user.login) && checkPassword){
            postRequest(REGURL, regOptions).then((data) => {
           
                switch (data.message) {
                    case "Пользователь создан": window.location.pathname = "./autorizationPage.html"
                    break;
                    case "Такой пользователь уже существует":
                        fieldsForErrror.innerHTML = "User already exists";
                    break;
                    case "Что-то пошло не так, попробуйте снова": console.log('Ошибка сервера');
                    break;
                }
        }).catch(() => {
            fieldsForErrror.innerHTML = "Server is down, try again later";
        })
        } else{
            fieldsForErrror.innerHTML = "Data entered incorrectly";
         }
    })
}
regInit()
