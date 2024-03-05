/* inserisci l'età del passeggero */
const nomeElement = document.getElementById('nome'); //Number
const cognomeElement = document.getElementById('cognome'); //Number
const etaElement = document.getElementById('eta');
const kmElement = document.getElementById('km'); //Number
const submitElement = document.getElementById('submit'); //Number
console.dir(submitElement)
let nome, cognome, eta, km = ''

/* prezzo al km*/
let prezzokm = 0.21; //Number

/* se il cliente ha un età maggiore uguale a 65 anni allora applica il seguente sconto*/
if (etaElement >= 65) {
    let prezzototover = (((prezzokm * 60) / 100) * kmElement); //Number

    console.log('Il prezzo è di ' + prezzototover.toFixed(2));
    console.log('Il prezzo è di 0.12 al km per gli over 65');
}
/* se il cliente ha un età minore di 18 anni allora applica il seguente sconto */
else if (etaElement < 18) {
    let prezzototunder = (((prezzokm * 80) / 100) * kmElement); //Number
    
    console.log('Il prezzo è di ' + prezzototunder.toFixed(2));
    console.log('Il prezzo è di 0.16 al km per gli under 18');
}
/* altrimenti non applicare nessuno sconto*/
else {
    let prezzokmnormale = (prezzokm * kmElement); //Number
    
    console.log('Il prezzo è di ' + prezzokmnormale.toFixed(2));
    console.log('Il prezzo è di 0.21 al km per gli over 18 e gli under 65');
}


submitElement.addEventListener('click', function () {
    console.log('click uoi8')

    nome = inputnome.value //String
    console.log(nome);
})