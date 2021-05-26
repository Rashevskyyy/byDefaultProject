const updateBtn = document.getElementById('update');
const fields = document.querySelectorAll('.table__main__item--inpt')

updateBtn.addEventListener('click', ()=>{
    let input = Array.from(fields);
    input.forEach( function(elem){
        elem.disabled = false;
        elem.style.border = '1px solid black';
        elem.style.borderRadius = "5px";
        // elem.addEventListener("keydown", function render(elementKey){
        //     if(elementKey.keyCode === 13){
        //         // alert("ok)" + elem.value);
        //     }
        // });
    })
})


