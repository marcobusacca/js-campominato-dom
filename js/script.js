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


// RECUPERO IL BUTTON HTML "PLAY" E LO INSERISCO IN UNA CONSTANTE
const playButton = document.getElementById('play');


// L'UTENTE CLICCA SUL "PLAY_BUTTON"
playButton.addEventListener("click", function(){

    // RECUPERO IL CONTAINER HTML "GRID" E LO INSERISCO IN UNA CONSTANTE
    const grid = document.getElementById('grid');

    // RIPRISTINO IL CONTAINER HTML "GRID" ALLA VERSIONE INIZIALE
    grid.innerHTML = '';

    // RECUPERO IL VALORE INSERITO DALL'UTENTE TRAMITE LA DIFFICULT_SELECT HTML
    const difficult = parseInt(document.getElementById('select_difficult').value);

    // DICHIARO LA VARIABILE CHE DEFINISCE LA GRANDEZZA TOTALE DELLA GRIGLIA
    let gridSize;
    
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