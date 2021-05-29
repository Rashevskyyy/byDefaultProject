import '../../scss/autorization.scss';
// import '../header/localization';
// import '../helpers/showPassword';
import '../helpers/singInPassword'
import {LOGURL, createOptions, postRequest} from "../helpers/requests"
import {setCookie} from "../helpers/general"
import {validateLogin, validatePassword} from '../logicPage/validation/validation'

const logInit = () => {
    const loginInput = document.querySelector('#LoginInput_SignIn');
    const passwordInput = document.querySelector('#PasswordInput_SignIn');
    const signInButton = document.querySelector('#SignInButton');
    const fieldsForErrror = document.getElementById('error');
    signInButton.addEventListener("click", () => {
        const user = {
            login: loginInput.value,
            password: passwordInput.value
        }
        const regOptions = createOptions(user)
        postRequest(LOGURL, regOptions).then((data) => {
            if(validateLogin(user.login) && validatePassword(user.password)){
                if (data.token) {
                    setCookie("token", data.token)
                    window.location.pathname = "./mainPage.html"
                } else{
                    fieldsForErrror.innerHTML = "This user does not exist";
                }
            } else{
                fieldsForErrror.innerHTML = "Data entered incorrectly";
            }
        }).catch(() => {
            fieldsForErrror.innerHTML = "Server is down, try again later";
        })
    })

}
logInit()
