/* //Es 1. Palindroma o no?
//Chiedere all’utente di inserire una parola 
var userWord = prompt("Inserisci una parola");

//Creare una funzione per capire se la parola inserita è tutta minuscola
function isThisLower(userWord) {
    var thisIsLower = userWord.toLowerCase();
    return thisIsLower
}
 */
//Creare una funzione per capire se la parola inserita è palindroma


//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var userChoose = prompt("Scegli se Pari o Dispari");
var userNumber = Number.parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log(userNumber);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcRandomNumber(min, max) {
    var pcChoose = Math.floor(Math.random() * (max - min));
    return pcChoose;
}
min(1)
max(5)
console.log(pcNumber);
//Sommiamo i due numeri
function sum(myNumber, pcNumber) {
    var result = myNumber + pcNumber;
    return result
}
myNumber(userNumber);
pcNumber()
console.log(result);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isThisEven() {
    if (sum % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

//Dichiariamo chi ha vinto.