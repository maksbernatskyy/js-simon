/*
Tools:

- function
- random
- const / let
- setTime
- if / else
- array
- for
*/

// ==================================================================
// ==================================================================

/* Inizializzazione funzioni */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===================================================================
// ===================================================================

/* Inizializzazione variabili */

// Collegamento al div nell'HTML dei numeri random
const randomNumbersField = document.getElementById("random-numbers");

// Contenitore dei numeri generati
const randomNumbers = [];

// Collegamento al blocco da far scomparire
const timerAndNumbersField = document.getElementById('timer-and-numbers')

// Collegamento alla lista di input nell'HTML
const inputList = document.getElementById('list-input')

// Totale di tempo per memorizzare
let counterEl = 5

// Collegamento al timer dell'HTML
const counterField = document.getElementById('timer')
counterField.innerHTML = counterEl

// ====================================================================
// ====================================================================

/* Generazione randomica dei numeri */

// Ciclo di inserimento numeri random
for (let i = 0; i < 5; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}
console.log(randomNumbers);

// Inserimento numeri nell'HTML
randomNumbersField.innerHTML = randomNumbers;

// ====================================================================
// ====================================================================

/* Sostituzione numeri con form */

// Avvio timer per il countdown
const clock = setInterval(() => {
    counterEl--
    counterField.innerHTML = counterEl

    if (counterEl === 0) {
        clearInterval(clock)
    }

}, 1000)

// Avvio timer la sostituzione dai numeri al form
setTimeout(() => {
    timerAndNumbersField.classList.toggle('d-none')
    inputList.classList.toggle('d-none')
}, 5000)

// ====================================================================
// ====================================================================

/* Inserimento numeri dell'utente */

/* Verifica correttezza numeri */

/* Riferisco quanti e quali numeri sono stati indovinati */
