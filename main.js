//crea una array con 5 numeri
const numeriDaIndoviare = [];
const selectConatiner = document.getElementById('container');
const numeriUtente = [];
let numeriChiesti;

while (numeriDaIndoviare.length < 5) {
    const creaNumeroRandom = randomNumber(1, 100);
    if (!numeriDaIndoviare.includes(creaNumeroRandom)) {
        numeriDaIndoviare.push(creaNumeroRandom);
    }
}
console.log(numeriDaIndoviare);

// Scrivi i 5 numeri nell'HTML
selectConatiner.innerHTML += numeriDaIndoviare;

// dopo 30sec scompaiono i numeri da indovinare
setTimeout(() => {
    selectConatiner.innerHTML = " ";
}, 30000);

// chiedi numeri all'utente per 5 volte
setTimeout(() => {
    while (numeriUtente.length < numeriDaIndoviare.length) {
        numeriChiesti = parseInt(prompt("Inserisci un numero"));
        numeriUtente.push(numeriChiesti);
    }
    console.log(numeriUtente);

    // controlla se i 5 numeri combaciano con quelli dell'utent o mostrati
    for (let i = 0; i < numeriDaIndoviare.length; i++) {
        if (numeriDaIndoviare.includes(numeriUtente[i])) {
            console.log("numero trovato", numeriUtente[i]);
        }
    }
}, 31000);










//  MY FUNCTIONS
// Crea un numero random
function randomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random
}

// Metti dentro una array una varialibe e controlla che non ci sia gia'
// while (numeriDaIndoviare.length < 5) {
//     const creaNumeroRandom = randomNumber(1, 100);
//     if (!numeriDaIndoviare.includes(creaNumeroRandom)) {
//         numeriDaIndoviare.push(creaNumeroRandom);
//     }
// }