"use strict";

// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "SQUARE" E CLASSE "EASY_SQUARE"
function createEasySquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSI ALL'ELEMENTO "DIV"
    square.classList.add('square', 'easy_square');

    return square;
}


// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "SQUARE" E CLASSE "MEDIUM_SQUARE"
function createMediumSquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSI ALL'ELEMENTO "DIV"
    square.classList.add('square', 'medium_square');

    return square;
}


// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "SQUARE" E CLASSE "HARD_SQUARE"
function createHardSquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSI ALL'ELEMENTO "DIV"
    square.classList.add('square', 'hard_square');

    return square;
}


// FUNZIONE CHE GENERA UN NUMERO CASUALE
function createRandomNumber(min, max){

    // CREA UN NUMERO RANDOM E LO RESTITUISCE
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// FUNZIONE CHE CONTROLLA OGNI NUMERO RANDOM GENERATO PER L'ARRAY DELLE BOMBE
function checkArrayBombs(arrayBombs, max){

    // VARIABILE DI CONTROLLO
    let numberCheck = false;

    // VARIABILE CHE CONTIENE IL NUMERO CASUALE
    let randomNumber;

    while (numberCheck === false){

        // GENERO IL NUMERO CASUALE
        randomNumber = createRandomNumber(1, max);
        console.log(randomNumber)

        if(!arrayBombs.includes(randomNumber)){ // L'ARRAY DELLE BOMBE NON INCLUDE IL NUMERO CASUALE GENERATO

            numberCheck = true;
        }
        console.log(numberCheck)
    }

    return randomNumber;
}


// FUNZIONE CHE GENERA LE BOMBE
function generateArrayBombs(arrayBombs, max, maxBombs){

    for (let i = 1; i <= maxBombs; i++){

        let randomNumber = checkArrayBombs(arrayBombs, max);
    
        arrayBombs.push(randomNumber);
    }
    
    console.log(arrayBombs.sort(function(a, b){return a-b})); // ALLA FINE DELL'ESERCIZIO RIMUOVERLO
}


// RECUPERO IL BUTTON HTML "PLAY" E LO INSERISCO IN UNA CONSTANTE
const playButton = document.getElementById('play');


// L'UTENTE CLICCA SUL "PLAY_BUTTON"
playButton.addEventListener("click", function(){

    // RECUPERO IL VALORE INSERITO DALL'UTENTE TRAMITE LA DIFFICULT_SELECT HTML
    const difficult = parseInt(document.getElementById('select_difficult').value);

    // RECUPERO IL CONTAINER HTML "GRID" E LO INSERISCO IN UNA CONSTANTE
    const grid = document.getElementById('grid');

    // RECUPERO IL CONTAINER HTML "MESSAGE" E LO INSERISCO IN UNA CONSTANTE
    const message = document.getElementById('message');


    // RIPRISTINO IL CONTAINER HTML "GRID" ALLA VERSIONE INIZIALE
    grid.innerHTML = '';

    // RIPRISTINO IL CONTAINER HTML "MESSAGE" ALLA VERSIONE INIZIALE
    message.innerHTML = '';
    

    // DICHIARO LA VARIABILE CHE DEFINISCE LA GRANDEZZA TOTALE DELLA GRIGLIA
    let gridSize;

    // DICHIARO LA CONSTANTE CHE DEFINISCE QUANTE BOMBE GENERARE
    const bombSize = 16;

    // CREO L'ARRAY CHE CONTERRA LE BOMBE
    let arrayBombs = [];

    // VARIABILE CHE DEFINISCE IL NUMERO DI CASELLE SENZA BOMBE CLICCATE DALL'UTENTE
    let validSquareClicked = 0;
    
    // CONTROLLO CHE DIFFICOLTA HA SCELTO L'UTENTE
    switch (difficult){
        
        case 1: // L'UTENTE HA SCELTO DIFFICOLTA EASY

            // ASSEGNO LA GRANDEZZA TOTALE DELLA GRIGLIA
            gridSize = 100;

            // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
            for (let i = 1; i <= gridSize; i++){

                // RICHIAMO LA FUNZIONE CREATE_EASY_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                const square = createEasySquare();

                // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
                square.innerText = i;

                // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
                square.addEventListener("click", function(){

                    // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                    this.classList.add('square_selected');
                })

                // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
                grid.append(square);
            }
        break;

        case 2: // L'UTENTE HA SCELTO DIFFICOLTA MEDIUM

            // ASSEGNO LA GRANDEZZA TOTALE DELLA GRIGLIA
            gridSize = 81;

            // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
            for (let i = 1; i <= gridSize; i++){

                // RICHIAMO LA FUNZIONE CREATE_MEDIUM_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                const square = createMediumSquare();

                // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
                square.innerText = i;

                // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
                square.addEventListener("click", function(){

                    // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                    this.classList.add('square_selected');
                })

                // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
                grid.append(square);
            }
        break;

        case 3: // L'UTENTE HA SCELTO DIFFICOLTA HARD

            // ASSEGNO LA GRANDEZZA TOTALE DELLA GRIGLIA
            gridSize = 49;

            // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
            for (let i = 1; i <= gridSize; i++){

                // RICHIAMO LA FUNZIONE CREATE_HARD_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                const square = createHardSquare();

                // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
                square.innerText = i;

                // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
                square.addEventListener("click", function(){

                    // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                    this.classList.add('square_selected');
                })

                // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
                grid.append(square);
            }
        break;
    }
})