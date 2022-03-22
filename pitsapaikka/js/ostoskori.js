document.addEventListener("DOMContentLoaded", ostoskori);

function ostoskori() {
    if (localStorage.getItem('pizzat')){
        document.getElementById('tuotteet').textContent += localStorage.getItem('pizzat') + ', ';
    }
    if (localStorage.getItem('omapizza')){
        document.getElementById('tuotteet').textContent += 'Fantasiapizza (' + localStorage.getItem('omapizza') + '), ';
    }
    if (localStorage.getItem('juomat')){
        document.getElementById('tuotteet').textContent += localStorage.getItem('juomat');
    }
}

function lahetaTilaus() {
    localStorage.removeItem('pizzat');
    localStorage.removeItem('omapizza');
    localStorage.removeItem('juomat');
    location.href = 'palaute.html';
}