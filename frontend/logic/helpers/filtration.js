
document.getElementById("databases-btn").onchange = function() {
    localStorage.setItem('databases-btn', document.getElementById("databases-btn").value);
}

if (localStorage.getItem('databases-btn')) {
    let savedValue = localStorage.getItem('databases-btn');
    let option = document.querySelector('#databases-btn > option[value="' + savedValue + '"]');
    if (option) {
        option.selected = true;
    }
}



