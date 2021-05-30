import {getRequest, postRequest, URL, createOptions} from '../helpers/requests'
import { validateFirstLastName, validationAge, validateEmail, validPhone} from '../../logic/logicPage/validation/validationMainCreate'
export function addFunction(data){
    const block = document.getElementById('table');
    block.innerHTML = "";
    for(let i = 0; i < data.length; i++) {
        let blockElem = document.createElement('div');
        blockElem.className = 'table__main row';
        blockElem.setAttribute('id', data[i].id || data[i]._id)
        blockElem.innerHTML =  ` 
    <div class="table__main__item">${data[i].fname || data[i].fName}</div>
    <div class="table__main__item">${data[i].lname || data[i].lName}</div>
    <div class="table__main__item small">${data[i].age}</div>
    <div class="table__main__item small">${data[i].city}</div>
    <div class="table__main__item">${data[i].phoneNumber}</div>
    <div class="table__main__item">${data[i].email}</div>
    <div class="table__main__item">${data[i].companyName}<div class="delete-persons" data-del="delete"></div></div>
        `
        block.prepend(blockElem);
        blockElem.addEventListener('click', (e) => {
            blockElem.classList.add('row-active')

        })
    }
}
export function createTableUnit() {
    const fName = document.getElementById("field-first-name");
    const lName = document.getElementById("field-last-name");
    const age = document.getElementById("field-age");
    const city = document.getElementById("field-city");
    const phoneNumber = document.getElementById("field-phone-number");
    const email = document.getElementById("field-email");
    const companyName = document.getElementById("field-company");
    const dbSelect = document.querySelector('#databases-btn');
    const errorMessage = document.getElementById('error-data');
    const body = {
        fName: fName.value,
        lName: lName.value,
        age: age.value,
        city: city.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        companyName: companyName.value
    }
    const options = createOptions(body);
    if(!validateFirstLastName(fName.value) || !validateFirstLastName(lName.value)){
        errorMessage.innerHTML = "Error in the fName or lName";
    } else if(!validationAge(age.value) || age.value === '0'){
        errorMessage.innerHTML = "Error in the age";
    } else if(!validateFirstLastName(city.value)){
        errorMessage.innerHTML = "Error in the city";
    } else if(!validPhone(phoneNumber.value)){
        errorMessage.innerHTML = "Error in the phone";
    } else if(!validateEmail(email.value)){
        errorMessage.innerHTML = "Error in the email";
    }else if(!validateFirstLastName(companyName.value)){
        errorMessage.innerHTML = "Error in the company";
    }else {
        postRequest(URL + dbSelect.value, options).then((data) => {
            getRequest(URL + dbSelect.value).then((data) => {
                addFunction(data.message)
                clean({ fName, lName, age, city, phoneNumber, email, companyName })
                document.getElementById("modal-window-create").classList.remove("show-create");
            })
        })
    }
}
export const clean = (cleanObject) => { for (let key in cleanObject) { cleanObject[key].value = ''; } };

