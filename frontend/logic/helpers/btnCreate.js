const create = document.getElementById('create');
const closeCreate = document.getElementById('close-create');

create.addEventListener('click', () =>{
    document.getElementById("modal-window-create").classList.toggle("show-modal-btns");
})

closeCreate.addEventListener('click', () =>{
    document.getElementById("modal-window-create").classList.remove("show-modal-btns");
})
