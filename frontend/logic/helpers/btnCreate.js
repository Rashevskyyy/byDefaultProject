const create = document.getElementById('create');
// const block = document.getElementById('table');
// const closeCreate = document.getElementById('close-create');

create.addEventListener('click', () =>{
    document.getElementById("modal-window-create").classList.toggle("show-create");
})

// closeCreate.addEventListener('click', () =>{
//     document.getElementById("modal-window-create").classList.remove("show-modal-btns");
// })


// create.addEventListener('click', addFunction);

// function addFunction(){
//     let blockElem = document.createElement('div');
//     blockElem.className = 'table__main row';
//     blockElem.innerHTML =  `
//     <div class="table__main__item  small"></div>
//     <div class="table__main__item"></div>
//     <div class="table__main__item"></div>
//     <div class="table__main__item small"></div>
//     <div class="table__main__item small"></div>
//     <div class="table__main__item"></div>
//     <div class="table__main__item"></div>
//     <div class="table__main__item"><div class="delete-persons" data-del="delete"></div></div>
//         `
//     block.prepend(blockElem);
    
// }
