import {deleteRequest, getRequest, URL} from "./requests";
import {addFunction} from "./btnCreate";

const dbSelect = document.querySelector('#databases-btn');
const deleteBtn = document.getElementById('delete-btn');
const del =  document.querySelectorAll('.delete-persons');

deleteBtn.addEventListener('click', ()=>{
    let a = Array.from(del);
    a.forEach( function(element) {
    console.log(element)
    })
})
deleteBtn.addEventListener('click', (e)=> {
    const nodeRows = document.querySelectorAll('.row-active')
    const rows = Array.from(nodeRows);
    if (rows.length === 0) return
    rows.map((el) => {
        deleteRequest(URL + dbSelect.value + `?id=${el.id}`).then((data) => {
            getRequest(URL + dbSelect.value).then((data) => {
                addFunction(data.message)
            })
        })
    })
})
