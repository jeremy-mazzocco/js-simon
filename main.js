// Variabili
const numeriDaIndoviare = [];
const numeriUtente = [];
const lunghezzaArray = 5;
const selectConatiner = document.getElementById('container');


//Crea una array con 5 numeri
insertNumberInArray(numeriDaIndoviare, lunghezzaArray);
console.log(numeriDaIndoviare);

// Scrivi i 5 numeri nell'HTML
selectConatiner.innerHTML += numeriDaIndoviare;

// dopo 30sec scompaiono i numeri da indovinare
setTimeout(() => {
    selectConatiner.innerHTML = " ";
}, 5000);

// chiedi numeri all'utente per 5 volte e mettili in una array
setTimeout(() => {
    while (numeriUtente.length <= numeriDaIndoviare.length) {
        let richiediNumeri = parseInt(prompt("Inserisci un numero"));
        numeriUtente.push(richiediNumeri);
    }
    console.log(numeriUtente);

    // controlla se i numeri da indovinare combaciano con quelli dell'utente
    checkArryWithArray(numeriDaIndoviare, numeriUtente);
}, 5100);





//  MY FUNCTIONS
// Crea un numero random
function randomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random
}

// Controlla una array con un altra
function checkArryWithArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr2[i])) {
            console.log("numero trovato:", arr2[i]);
        }
    }
}

// Metti dentro una array tot numeri
function insertNumberInArray(arr, lunghezza) {
    while (arr.length < lunghezza) {
        const creaNumeroRandom = randomNumber(1, 100);
        if (!arr.includes(creaNumeroRandom)) {
            arr.push(creaNumeroRandom);
        }
    }
}
