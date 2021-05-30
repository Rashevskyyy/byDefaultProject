import '../../scss/mainPage.scss';
import '../header/localization';
import '../header/modalWindow';
import '../helpers/mainPassword';
import '../helpers/btnClearAll';
import { addFunction, createTableUnit } from  '../helpers/btnCreate';
import '../helpers/btnDelete';
import '../helpers/btnUpdate';
import '../header/singoutBtn';
import '../helpers/filtration';
import { getRequest, URL } from "../helpers/requests";


const mainInit = () => {
    const dbSelect = document.querySelector('#databases-btn');
    const create = document.getElementById('create');
    const createBtn = document.getElementById("create-btn")
    getRequest(URL + dbSelect.value).then((data) => {
        addFunction(data.message)
    })

    create.addEventListener('click', () =>{
        document.getElementById("modal-window-create").classList.toggle("show-create");
    })

    createBtn.addEventListener('click', createTableUnit)

dbSelect.addEventListener('change', (event) => {
    getRequest(URL + event.target.value).then((data) => {
        addFunction(data.message)

    })
})
}
mainInit()

