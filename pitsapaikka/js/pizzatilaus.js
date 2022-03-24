
/*
//lisää valitut pizzat koriin
function valinta1() {
    lista.push('Pepperoni');
    document.getElementById("lisaa").style.display="none";
    document.getElementById("lisaaiso").style.display="none";
    document.getElementById("vahvistus1").style.display = "block";
}
function valinta2() {
    lista.push('Pepperoni Iso');
    document.getElementById("lisaa").style.display="none";
    document.getElementById("lisaaiso").style.display="none";
    document.getElementById("vahvistus1").style.display = "block";
}
function valinta3() {
    lista.push('Juusto');
    document.getElementById("lisaa2").style.display="none";
    document.getElementById("lisaaiso2").style.display="none";
    document.getElementById("vahvistus2").style.display = "block";
}
function valinta4() {
    lista.push('Juusto Iso');
    document.getElementById("lisaa2").style.display="none";
    document.getElementById("lisaaiso2").style.display="none";
    document.getElementById("vahvistus2").style.display = "block";
}
function valinta5() {
    lista.push('Kebab');
    document.getElementById("lisaa3").style.display="none";
    document.getElementById("lisaaiso3").style.display="none";
    document.getElementById("vahvistus3").style.display = "block";
}
function valinta6() {
    lista.push('Kebab Iso');
    document.getElementById("lisaa3").style.display="none";
    document.getElementById("lisaaiso3").style.display="none";
    document.getElementById("vahvistus3").style.display = "block";
}
*/
//juomavalinnat tulee tähän
const lista = []

//vahvistaa valinnat, lisää localstorageen ja näyttää käyttäjälle mitä on valittu
function vahvistus(){

    //lukee checkboxit
    const check1=document.getElementById('lisaa')
    const check2=document.getElementById('lisaaiso')
    const check3=document.getElementById('lisaa2')
    const check4=document.getElementById('lisaaiso2')
    const check5=document.getElementById('lisaa3')
    const check6=document.getElementById('lisaaiso3')

    //lisää valitut pizzat ostoskoriin
    if (check1.checked===true){
        lista.push('Pepperoni');
    }
    if (check2.checked===true){
        lista.push('Pepperoni Iso');
    }
    if (check3.checked===true){
        lista.push('Juusto');
    }
    if (check4.checked===true){
        lista.push('Juusto Iso');
    }
    if (check5.checked===true){
        lista.push('Kebab');
    }
    if (check6.checked===true){
        lista.push('Kebab Iso');
    }
	document.getElementById("pizzalista").textContent += lista.join(', ');
	console.log(lista);
	localStorage.setItem('pizzat', lista.join(', '));
}

function main() {
	location.href = 'index.html';
}