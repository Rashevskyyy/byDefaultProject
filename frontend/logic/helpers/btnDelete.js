import '../../scss/mainPage.scss';
const deleteBtn = document.getElementById('delete-btn');
const del =  document.querySelectorAll('.delete-persons');

deleteBtn.addEventListener('click', ()=>{
 let a = Array.from(del);
 a.forEach( function(element) {
  element.classList.toggle('show-btn-delete');
 })
})

