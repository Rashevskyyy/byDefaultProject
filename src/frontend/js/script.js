import '../scss/vendor.scss';
import '../index.html';
import click from '../mods/welcome.js';

const button = document.querySelector('.button')

button.addEventListener('click', ()=>{
    click();
});