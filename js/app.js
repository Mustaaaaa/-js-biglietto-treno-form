/* inserisci l'età del passeggero */
const nomeElement = document.getElementById('nome'); //Element
console.log(nome)
const cognomeElement = document.getElementById('cognome'); //Element
console.log(cognome)
const etaElement = document.getElementById('eta');//Element
console.log(eta)
const kmElement = document.getElementById('km'); //Element
console.log(km)
const submitElement = document.getElementById('submit'); //Element
console.dir(submit)
const bigliettoElement = document.getElementById('biglietto')//Element

const resetElement = document.getElementById('reset'); //Element
// let nome, cognome, eta, km = ''




submitElement.addEventListener('click', function () {
/* se il cliente ha un età maggiore uguale a 65 anni allora applica il seguente sconto*/
const nomevalue = nomeElement.value
const cognomevalue = cognomeElement.value
const etavalue = etaElement.value
const kmvalue = kmElement.value


if (etavalue >= 65) {
    let prezzototover = (((0.21 * 60) / 100) * kmvalue); //Number
    // let nomevalue = nomeElement
    console.log('Il prezzo è di ' + prezzototover.toFixed(2));
    console.log('Il prezzo è di 0.12 al km per gli over 65');
    bigliettoElement.innerHTML = `
    <table class="container-lg">
    <thead>
      <tr>
        <th class="col-3">Nome e Cognome</th>
        <th class="col-3">Sconto</th>
        <th class="col-3">Carrozza</th>
        <th class="col-3">Codice CP</th>
        <th class="col-3">Costo biglietto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${nomevalue} ${cognomevalue}</td>
        <td>40%</td>
        <td>5</td>
        <td>23547</td>
        <td>${prezzototunder.toFixed(2)}€</td>
      </tr>
    </tbody>
  </table>

  `

}
/* se il cliente ha un età minore di 18 anni allora applica il seguente sconto */
else if (etavalue < 18) {
    let prezzototunder = (((0.21 * 80) / 100) * kmvalue); //Number
    
    console.log('Il prezzo è di ' + prezzototunder.toFixed(2));
    console.log('Il prezzo è di 0.16 al km per gli under 18');
    bigliettoElement.innerHTML = `
    <table class="container-lg">
    <thead>
      <tr>
        <th class="col-3">Nome e Cognome</th>
        <th class="col-3">Sconto</th>
        <th class="col-3">Carrozza</th>
        <th class="col-3">Codice CP</th>
        <th class="col-3">Costo biglietto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${nomevalue} ${cognomevalue}</td>
        <td>20%</td>
        <td>12</td>
        <td>35476</td>
        <td>${prezzototunder.toFixed(2)}€</td>
      </tr>
    </tbody>
  </table>

  `
}
/* altrimenti non applicare nessuno sconto*/
else {
    let prezzokmnormale = (0.21 * kmvalue); //Number
    
    console.log('Il prezzo è di ' + prezzokmnormale.toFixed(2));
    console.log('Il prezzo è di 0.21 al km per gli over 18 e gli under 65');
    bigliettoElement.innerHTML = `
    <table class="container-lg">
    <thead>
      <tr>
        <th class="col-4">Nome e Cognome</th>
        <th class="col-4">Carrozza</th>
        <th class="col-4">Codice CP</th>
        <th class="col-4">Costo biglietto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${nomevalue} ${cognomevalue}</td>
        <td>3</td>
        <td>65435</td>
        <td>${prezzokmnormale.toFixed(2)}€</td>
      </tr>
    </tbody>
  </table>

  `
}
    
if (nomevalue =='',cognomevalue =='', kmvalue =='', etavalue =='' ) {
        alert("please fill empty space")
     bigliettoElement.innerHTML = ``
}


console.log(nomevalue, cognomevalue)
    
resetElement.addEventListener('click', function () {
    let kmvalue = ''
    bigliettoElement.innerHTML = ``
})
})

