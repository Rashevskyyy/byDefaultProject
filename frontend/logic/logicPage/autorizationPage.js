import '../../scss/autorization.scss';
import '../header/localization';
// import '../helpers/showPassword';
import '../helpers/singInPassword'
import {LOGURL, createOptions, postRequest} from "../helpers/requests"
import {setCookie} from "../helpers/general"

const logInit = () => {
    const loginInput = document.querySelector('#LoginInput_SignIn');
    const passwordInput = document.querySelector('#PasswordInput_SignIn');
    const signInButton = document.querySelector('#SignInButton');

    signInButton.addEventListener("click", () => {

        const user = {login: loginInput.value, password: passwordInput.value}
        const regOptions = createOptions(user)
        postRequest(LOGURL, regOptions).then((data) => {
            if (data.token) {
                setCookie("token", data.token)
                window.location.pathname = "mainPage.html"
            }
        }).catch(() => {
            // Здесь делать отрисовку ошибки что сервер не работает, попробуйте позже
            console.log('Умер')
        })
    })

}
logInit()