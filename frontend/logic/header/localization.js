import '../../scss/header.scss';

let localizationSwitch = document.getElementById('localization-switch');
let dropdownLang = document.getElementById('dropdown-languages');

const rus = document.getElementById("rus");
const eng = document.getElementById("eng");
const dataBases = document.getElementById("data-bases");
const sortingBy = document.getElementById("sorting-by-name");
const createWindow = document.getElementById("create-window");
const createButton = document.getElementById("create");
const updateButton = document.getElementById("update");
const deleteButton = document.getElementById("delete-btn");
const clearAllButton = document.getElementById("clear-all");
const FnameLoc = document.getElementById("Fname");
const LnameLoc = document.getElementById("Lname");
const ageLoc = document.getElementById("age");
const cityLoc = document.getElementById("city");
const phoneNumberLoc = document.getElementById("phoneNumber");
const emailLoc = document.getElementById("city");
const companyNameLoc = document.getElementById("companyName");
const mainPage = {
  eng: {
    dataBases:"Data Bases",
    sortingBy:"Sorting by",
    createWindow:"Create",
    createButton:"Create",
    updateButton:"Update",
    deleteButton:"Delete",
    clearAllButton:"ClearAll",
    Fname:"Fname",
    Lname:"Lname",
    age:"age",
    city:"city",
    phoneNumber:"phoneNumber",
    email:"email",
    companyName:"companyName",
  },
  rus:{
    dataBases:"База данных",
    sortingBy:"Сортировать по",
    createWindow:"Создать",
    createButton:"Создать",
    updateButton:"Обновить",
    deleteButton:"Удалить",
    clearAllButton:"Очистить",
    Fname:"Имя",
    Lname:"Фамилия",
    age:"Возраст",
    city:"Город",
    phoneNumber:"Телефон",
    email:"Почта",
    companyName:"Компания",
  },
};

const mainPageRus = mainPage.rus;
const mainPageEng = mainPage.eng;

function languageChange(lang){
  dataBases.innerHTML = lang.dataBases;
  sortingBy.innerHTML = lang.sortingBy;
  createWindow.innerHTML = lang.createWindow;
  createButton.innerHTML = lang.createButton;
  updateButton.innerHTML = lang.updateButton;
  deleteButton.innerHTML = lang.deleteButton;
  clearAllButton.innerHTML = lang.clearAllButton;
  FnameLoc.innerHTML = lang.Fname;
  LnameLoc.innerHTML = lang.Lname;
  ageLoc.innerHTML = lang.age;
  cityLoc.innerHTML = lang.city;
  phoneNumberLoc.innerHTML = lang.phoneNumber;
  emailLoc.innerHTML = lang.email;
  companyNameLoc.innerHTML = lang.companyName;
}

localizationSwitch.addEventListener('click', () => {
  document.getElementById("dropdown-languages").classList.toggle("show");
});

rus.addEventListener("click", function (e) {
  languageChange(mainPageRus)
});

eng.addEventListener("click", function (e) {
  languageChange(mainPageEng)
});

dropdownLang.addEventListener('click', () => {
  document.getElementById("dropdown-languages").classList.remove('show');
});