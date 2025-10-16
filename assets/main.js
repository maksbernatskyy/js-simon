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

/* Inizializzazione funzioni */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Inizializzazione variabili */

// Collegamento al div nell'HTML dei numeri random
const randomNumbersField = document.getElementById("random-numbers");

// Contenitore dei numeri generati
const randomNumbers = [];

// Collegamento alla lista di input nell'HTML
const inputList = document.getElementById('list-input')

/* Generazione randomica dei numeri */

// Ciclo di inserimento numeri random
for (let i = 0; i < 5; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}
console.log(randomNumbers);

// Inserimento numeri nell'HTML
randomNumbersField.innerHTML = randomNumbers;

/* Sostituzione numeri con form */

// Avvio timer
setTimeout(() => {
    randomNumbersField.classList.toggle('d-none')
    inputList.classList.toggle('d-none')
}, 5000)

/* Inserimento numeri dell'utente */

/* Verifica correttezza numeri */

/* Riferisco quanti e quali numeri sono stati indovinati */
