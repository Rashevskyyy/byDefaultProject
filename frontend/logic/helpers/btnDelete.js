import '../../scss/mainPage.scss';
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', ()=>{
  document.querySelector('.delete-persons').classList.toggle('show-btn-delete');
})