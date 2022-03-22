//pizzan täytteet tulee tähän
const lista = []

//lisää täytteet listaan ja ottaa lisäysnapin pois näkyvistä
function valinta1() {
    lista.push('Juusto');
    document.getElementById("vahvistus1").style.display = "block";
}
function valinta2() {
    lista.push('Pepperoni');
    document.getElementById("vahvistus2").style.display = "block";
}
function valinta4() {
    lista.push('Kinkku');
    document.getElementById("vahvistus3").style.display = "block";
}
function valinta5() {
    lista.push('Kana');
    document.getElementById("vahvistus4").style.display = "block";
}
function valinta6() {
    lista.push('Ananas');
    document.getElementById("vahvistus5").style.display = "block";
}

//tyhjentää listan ja localstoragen ja laittaa napit taas näkyviin
function poistaKaikki(){
    lista.length=0;
    document.getElementById("vahvistus1").style.display = "none";
    document.getElementById("vahvistus2").style.display = "none";
    document.getElementById("vahvistus3").style.display = "none";
    document.getElementById("vahvistus4").style.display = "none";
    document.getElementById("vahvistus5").style.display = "none";
    document.getElementById("taytelista").textContent = 'Sinun pizzasi: ';
    localStorage.removeItem('omapizza');
}

//vahvistaa valinnat, lisää localstorageen ja näyttää käyttäjälle mitä on valittu
function vahvistus(){
    console.log(lista);
    document.getElementById("taytelista").textContent = 'Sinun pizzasi: ' + lista.join(', ');
    localStorage.setItem('omapizza', lista.join(', '));
    document.getElementById("nappi").style.display="block";
}