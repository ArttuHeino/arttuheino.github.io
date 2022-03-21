//juomavalinnat tulee tähän
const lista = []


//tyhjentää listan ja localstoragen ja laittaa napit taas näkyviin
function poistaKaikki(){
    lista.length=0;
    document.getElementById("juomalista").textContent = 'Juomavalintasi: ';
    document.getElementById("vahvista").style.display="block";
    localStorage.removeItem('juomat');
}

//vahvistaa valinnat, lisää localstorageen ja näyttää käyttäjälle mitä on valittu
function vahvistus(){

    //lukee checkboxit
    const check1=document.getElementById('colatolkki')
    const check2=document.getElementById('colapienipullo')
    const check3=document.getElementById('colaisopullo')
    const check4=document.getElementById('fantatolkki')
    const check5=document.getElementById('fantapienipullo')
    const check6=document.getElementById('fantaisopullo')
    const check7=document.getElementById('spritetolkki')
    const check8=document.getElementById('spritepienipullo')
    const check9=document.getElementById('spriteisopullo')
    const check10=document.getElementById('vesipienipullo')
    const check11=document.getElementById('vesiisopullo')

    //lisää valitut juomat ostoskoriin (näyttää ihan hirveeltä tiiän)
    if (check1.checked===true){
        lista.push('Coca-Cola 0.33L');
    }
    if (check2.checked===true){
        lista.push('Coca-Cola 0.5L');
    }
    if (check3.checked===true){
        lista.push('Coca-Cola 1.5L');
    }
    if (check4.checked===true){
        lista.push('Fanta 0.33L');
    }
    if (check5.checked===true){
        lista.push('Fanta 0.5L');
    }
    if (check6.checked===true){
        lista.push('Fanta 1.5L');
    }
    if (check7.checked===true){
        lista.push('Sprite 0.33L');
    }
    if (check8.checked===true){
        lista.push('Sprite 0.5L');
    }
    if (check9.checked===true){
        lista.push('Sprite 1.5L');
    }
    if (check10.checked===true){
        lista.push('Kivennäisvesi 0.5L');
    }
    if (check11.checked===true){
        lista.push('Kivennäisvesi 1.5L');
    }
    console.log(lista);
    document.getElementById("juomalista").textContent += lista.join(', ');
    localStorage.setItem('juomat', lista.join(', '));
    document.getElementById("vahvista").style.display="none";
    document.getElementById("seuraava").style.display="block";
}