import '../../scss/homePage.scss';
const singInPageBtn = document.getElementById('SignInButton_HomePage');
const registrationPageBtn = document.getElementById('RegisterButton');

singInPageBtn.addEventListener('click', ()=>{
    document.location = './autorizationPage.html';
});

registrationPageBtn.addEventListener('click', ()=>{
    document.location = document.location = './registrationPage.html';
});