import {deleteRequest, getRequest, URL} from './requests'
import {addFunction} from "./btnCreate";
const clearAllBtn = document.getElementById('clear-all');
const closeClear = document.getElementById('close-clear');
const exitClear = document.getElementById('exit-clear');
const yesBtn = document.getElementById('yes-btn')
const dbSelect = document.querySelector('#databases-btn');

clearAllBtn.addEventListener('click', () =>{
  document.getElementById("window-clear-all").classList.toggle("show-modal-btns");;
})
closeClear.addEventListener('click', () =>{
  document.getElementById("window-clear-all").classList.remove("show-modal-btns");;
})
exitClear.addEventListener('click', () =>{
  document.getElementById("window-clear-all").classList.remove("show-modal-btns");;
})
yesBtn.addEventListener('click', () => {
  deleteRequest(URL + dbSelect.value + '?id=all').then((data) => {
    getRequest(URL + dbSelect.value).then((data) => {
      addFunction(data.message)
    })
    document.getElementById("window-clear-all").classList.remove("show-modal-btns");;
  })
})