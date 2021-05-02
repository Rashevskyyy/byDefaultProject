import '../index.html';
import '../scss/header.scss';
import '../scss/homePage.scss';
import click from '../mods/welcome.js';

document.getElementById('localization-switch').onclick = myFunction;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

// const button = document.querySelector('.button')

// button.addEventListener('click', ()=>{
//     click();
// });