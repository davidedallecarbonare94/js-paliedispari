//Es 1. Palindroma o no?
//Chiedere all’utente di inserire una parola 
/* var userWord = prompt("Inserisci una parola"); */

//Creare una funzione per capire se la parola inserita è palindroma


// CORREZIONE

/* function isPalindrome(word) {
    //Rimuovere punteggiatura e spaziatura, 
    //il metodo qua sotto mi mostra tutto ciò che non è carattere leggibile e me lo restituisce in array
    //viene rimossa la punteggiatura
    var hasPuntuation = "word".match(/\W/gm)
    if (hasPuntuation !== null) {
        for (var i = 0; i < hasPuntuation.length; i++){
            var element = hasPuntuation[i]
            if (word.includes(element)) {
                word = word = word.replace(element, "") //il doppio word è per far si che poi resti il valore senza le punteggiature come valore della funzione
                //senza il doppio word mi mostrerebbe tutte le casistiche della parola ognuna senza uno spazio o una virgola in successione
            }
        }
    }
    

    var reverseWord = word.split("").reverse().join("");
    
    if (reverseWord.toLowerCase() === word.toLowerCase()) {
        return true;
    }
    return false;
}

var userWord = prompt("Inserisci una parola");
console.log(isPalindrome(userWord));


 */



//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var userChoose = prompt("Scegli se Pari o Dispari");
var userNumber = Number.parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log(userNumber);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcRandomNumber(min, max) {
    var pcChoose = Math.floor(Math.random() * (max - min +1) )+ min;
    return pcChoose;
}
var pcNumber = pcRandomNumber(1, 5)
console.log(pcNumber);
 //Sommiamo i due numeri // qui poteva essere risolto con una nuova variabile senza funzione
function sum(myNumber, pcChooseNumber) {
    var result = myNumber + pcChooseNumber;
    return result
}
var somma = sum(userNumber, pcNumber)
console.log(somma);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isThisEven(odd, even) {
    if (somma % 2 === 0) {
        console.log(odd);
    } else {
        console.log(even);
    }
} 
isThisEven("Ha vinto pari!", "Ha vinto dispari!")
// avendola chiamata "is" viene solitamente dato risultato booleano


//Dichiariamo chi ha vinto.
