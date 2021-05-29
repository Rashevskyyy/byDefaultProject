import '../../scss/createAccount.scss';
// import '../header/localization';
import '../helpers/registPassword';
import {REGURL, createOptions, postRequest} from "../helpers/requests"
import {validateLogin, validatePassword} from '../logicPage/validation/validation'
const loginInput = document.querySelector('#UserNameInput_SignUp');
const passwordInput = document.querySelector('#PasswordInput_SignUp');
const passwordConfirm = document.getElementById('password-confirm');
const signButton = document.querySelector('#SignUpButton');
const fieldsForErrror = document.getElementById('error');
const regInit = () => {
  
    signButton.addEventListener("click", () => {
        const user = {
            login: loginInput.value,
            password: passwordInput.value,
            passwordConfirm: passwordConfirm.value
        }
        const regOptions = createOptions(user); 
        if(validateLogin(user.login) && validatePassword(user.password)){
            postRequest(REGURL, regOptions).then((data) => {
                if(data.message === "Что-то пошло не так, попробуйте снова"){
                    console.log('Ошибка сервера');
                } else if(data.message === "Такой пользователь уже существует"){
                    fieldsForErrror.innerHTML = "User already exists";
                } else if(user.password !== user.passwordConfirm){
                    fieldsForErrror.innerHTML = "Passwords are different";
                }else{
                    window.location.pathname = "./autorizationPage.html";
                }
            }).catch(() => {
                fieldsForErrror.innerHTML = "Server is down, try again later";
            })
        } else{
            fieldsForErrror.innerHTML = "Data entered incorrectly";
        }
    })
}
regInit();

