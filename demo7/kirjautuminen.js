document.addEventListener("DOMContentLoader", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = 'kylla';
    if(kirjautunut === 'kylla') {
        document.getElementById('tervetulo_teksti').textContent += 'Arttu!';
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", "arttu");
}