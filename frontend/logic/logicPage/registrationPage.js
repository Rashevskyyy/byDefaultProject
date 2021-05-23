import '../../scss/createAccount.scss';
import '../header/localization';
import {REGURL, createOptions, postRequest} from "../helpers/requests"

const regInit = () => {
    const loginInput = document.querySelector('#UserNameInput_SignUp');
    const passwordInput = document.querySelector('#PasswordInput_SignUp');
    // confirm node
    const signButton = document.querySelector('#SignUpButton');

    signButton.addEventListener("click", () => {
        // const validation = VALIDATE(логин пароль конфирм пароль)
        // если валидация прошла выполняется что внизу

        const user = {login: loginInput.value, password: passwordInput.value}
        const regOptions = createOptions(user)
        postRequest(REGURL, regOptions).then((data) => {
            switch (data.message) {
                case "Пользователь создан": window.location.pathname = "signIn.html"
                break;
                case "Такой пользователь уже существует":
                    // Отрисовать ошибку пользователь существует
                    console.log('Пользователь существует');
                break;
                case "Что-то пошло не так, попробуйте снова": console.log('Ошибка сервера');
                break;
            }
        }).catch(() => {
            // Здесь делать отрисовку ошибки что сервер не работает, попробуйте позже
            console.log('Умер')
        })
    })

}
regInit()
