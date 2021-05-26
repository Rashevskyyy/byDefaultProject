import '../../scss/mainPage.scss';
const deleteBtn = document.getElementById('delete-btn');
const del =  document.querySelectorAll('.delete-persons');
deleteBtn.addEventListener('click', ()=>{
    let a = Array.from(del);
    a.forEach( function(element) {
    element.classList.toggle('show-btn-delete');
    })
})

function removeBlock(delElem, attribute, attributeName) {
    if (!(delElem && attribute && attributeName)) return;
    return function(e) {
        let target = e.target;
        if (!(target.hasAttribute(attribute) ?
        (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
        while (target != this) {
            if (target.classList.contains(delElem)) {
                target.remove();
                return;
            }
            target = target.parentNode;
        }
        return;
    };
} 
document.addEventListener("click", removeBlock("row", "data-del", "delete"));