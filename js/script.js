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

        if(!arrayBombs.includes(randomNumber)){ // L'ARRAY DELLE BOMBE NON INCLUDE IL NUMERO CASUALE GENERATO

            numberCheck = true;
        }
    }

    return randomNumber;
}


// FUNZIONE CHE GENERA LE BOMBE
function generateArrayBombs(arrayBombs, max, maxBombs){

    for (let i = 1; i <= maxBombs; i++){

        let randomNumber = checkArrayBombs(arrayBombs, max);
    
        arrayBombs.push(randomNumber);
    }
    
    // console.log(arrayBombs.sort(function(a, b){return a-b})); // ALLA FINE DELL'ESERCIZIO RIMUOVERLO
}


// FUNZIONE CHE RIVELA LE BOMBE ALLA FINE DEL GIOCO
function revealArrayBombs(arrayBombs){

    // PRENDO TUTTI GLI ELEMENTI HTML CHE HANNO LA CLASSE "SQUARE"
    let squares = document.querySelectorAll('.square');

    // SCORRO TUTTI GLI ELEMENTI HTML DELL'ARRAY "SQUARES" DENTRO UN CICLO FOR
    for (let i = 0; i < squares.length; i++){

        if (arrayBombs.includes(i+1)){ // L'ELEMENTO DELL'ATTUALE ITERAZIONE è INCLUSO NELL'ARRAY_BOMBS

            // AGGIUNTO ALL'ELEMENTO LA CLASSE "SQUARE_BOMB"
            squares[i].classList.add('square_bomb');
        }
    }
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

    // CREO UN ARRAY DOVE INSERISCO TUTTI GLI SQUARE SENZA BOMBE CLICCATI DALL'UTENTE
    let squareSelected = [];


    // VARIABILE CHE DEFINISCE IL NUMERO DI CASELLE SENZA BOMBE CLICCATE DALL'UTENTE
    let validSquareClicked = 0;

    // VARIABILE CHE DEFINISCE SE L'UTENTE HA PERSO
    let gameOver = false;
    
    
    // CONTROLLO CHE DIFFICOLTA HA SCELTO L'UTENTE
    switch (difficult){
        
        case 1: // L'UTENTE HA SCELTO DIFFICOLTA EASY

            // ASSEGNO LA GRANDEZZA TOTALE DELLA GRIGLIA
            gridSize = 100;

            // RICHIAMO LA FUNZIONE PER GENERARE LE BOMBE
            generateArrayBombs(arrayBombs, gridSize, bombSize);

            // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
            for (let i = 1; i <= gridSize; i++){

                // RICHIAMO LA FUNZIONE CREATE_EASY_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                const square = createEasySquare();

                // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
                square.innerText = i;

                // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
                square.addEventListener("click", function(){

                    if (gameOver === false){

                        if (!arrayBombs.includes(parseInt(this.innerText))){ // IL BLOCCO CLICCATO NON CONTIENE UNA BOMBA
    
                            // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                            this.classList.add('square_selected');

                            // CONTROLLO CHE L'UTENTE NON ABBIA GIA CLICCATO IL QUADRATO DI OGNI ITERAZIONE
                            if (!squareSelected.includes(this.innerText)){

                                // INSERISCO L'ELEMENTO ATTUALE CLICCATO DENTRO L'ARRAY "SQUARE_SELECTED"
                                squareSelected.push(this.innerText);

                                // INCREMENTO LA VARIABILE CHE DEFINISCE IL NUMERO DI CASELLE SENZA BOMBE CLICCATE DALL'UTENTE
                                validSquareClicked++;
                            }
    
                            if(validSquareClicked === gridSize - bombSize){ // L'UTENTE HA CLICCATO TUTTE LE CASELLE SENZA BOMBE

                                // RICHIAMO LA FUNZIONE REVEAL_ARRAY_BOMBS
                                revealArrayBombs(arrayBombs);

                                // STAMPO IL MESSAGGIO NEL DOM
                                message.innerHTML = `Hai vinto! <br> Non hai beccato nessuna bomba! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`;

                                gameOver = true;
                            }
    
                        } else{ // IL BLOCCO CLICCATO CONTIENE UNA BOMBA

                            // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_FIRST_BOMB"
                            this.classList.add('square_first_bomb');
    
                            // RICHIAMO LA FUNZIONE REVEAL_ARRAY_BOMBS
                            revealArrayBombs(arrayBombs);
    
                            // STAMPO IL MESSAGGIO NEL DOM
                            message.innerHTML = `Hai perso! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`;

                            gameOver = true;
                        }
                    }
                })

                // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
                grid.append(square);
            }
        break;

        case 2: // L'UTENTE HA SCELTO DIFFICOLTA MEDIUM

            // ASSEGNO LA GRANDEZZA TOTALE DELLA GRIGLIA
            gridSize = 81;

            // RICHIAMO LA FUNZIONE PER GENERARE LE BOMBE
            generateArrayBombs(arrayBombs, gridSize, bombSize);

            // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
            for (let i = 1; i <= gridSize; i++){

                // RICHIAMO LA FUNZIONE CREATE_MEDIUM_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                const square = createMediumSquare();

                // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
                square.innerText = i;

                // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
                square.addEventListener("click", function(){

                    if (gameOver === false){

                        if (!arrayBombs.includes(parseInt(this.innerText))){ // IL BLOCCO CLICCATO NON CONTIENE UNA BOMBA
    
                            // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                            this.classList.add('square_selected');
    
                            // CONTROLLO CHE L'UTENTE NON ABBIA GIA CLICCATO IL QUADRATO DI OGNI ITERAZIONE
                            if (!squareSelected.includes(this.innerText)){

                                // INSERISCO L'ELEMENTO ATTUALE CLICCATO DENTRO L'ARRAY "SQUARE_SELECTED"
                                squareSelected.push(this.innerText);

                                // INCREMENTO LA VARIABILE CHE DEFINISCE IL NUMERO DI CASELLE SENZA BOMBE CLICCATE DALL'UTENTE
                                validSquareClicked++;
                            }
    
                            if(validSquareClicked === gridSize - bombSize){ // L'UTENTE HA CLICCATO TUTTE LE CASELLE SENZA BOMBE

                                // RICHIAMO LA FUNZIONE REVEAL_ARRAY_BOMBS
                                revealArrayBombs(arrayBombs);
    
                                // STAMPO IL MESSAGGIO NEL DOM
                                message.innerHTML = `Hai vinto! <br> Non hai beccato nessuna bomba! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`;

                                gameOver = true;
                            }
    
                        } else{ // IL BLOCCO CLICCATO CONTIENE UNA BOMBA

                            // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_FIRST_BOMB"
                            this.classList.add('square_first_bomb');
    
                            // RICHIAMO LA FUNZIONE REVEAL_ARRAY_BOMBS
                            revealArrayBombs(arrayBombs);
    
                            // STAMPO IL MESSAGGIO NEL DOM
                            message.innerHTML = `Hai perso! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`;

                            gameOver = true;
                        }
                    }
                })

                // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
                grid.append(square);
            }
        break;

        case 3: // L'UTENTE HA SCELTO DIFFICOLTA HARD

            // ASSEGNO LA GRANDEZZA TOTALE DELLA GRIGLIA
            gridSize = 49;

            // RICHIAMO LA FUNZIONE PER GENERARE LE BOMBE
            generateArrayBombs(arrayBombs, gridSize, bombSize);

            // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
            for (let i = 1; i <= gridSize; i++){

                // RICHIAMO LA FUNZIONE CREATE_HARD_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                const square = createHardSquare();

                // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
                square.innerText = i;

                // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
                square.addEventListener("click", function(){

                    if (gameOver === false){

                        if (!arrayBombs.includes(parseInt(this.innerText))){ // IL BLOCCO CLICCATO NON CONTIENE UNA BOMBA
    
                            // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                            this.classList.add('square_selected');
    
                            // CONTROLLO CHE L'UTENTE NON ABBIA GIA CLICCATO IL QUADRATO DI OGNI ITERAZIONE
                            if (!squareSelected.includes(this.innerText)){

                                // INSERISCO L'ELEMENTO ATTUALE CLICCATO DENTRO L'ARRAY "SQUARE_SELECTED"
                                squareSelected.push(this.innerText);

                                // INCREMENTO LA VARIABILE CHE DEFINISCE IL NUMERO DI CASELLE SENZA BOMBE CLICCATE DALL'UTENTE
                                validSquareClicked++;
                            }
    
                            if(validSquareClicked === gridSize - bombSize){ // L'UTENTE HA CLICCATO TUTTE LE CASELLE SENZA BOMBE

                                // RICHIAMO LA FUNZIONE REVEAL_ARRAY_BOMBS
                                revealArrayBombs(arrayBombs);
    
                                // STAMPO IL MESSAGGIO NEL DOM
                                message.innerHTML = `Hai vinto! <br> Non hai beccato nessuna bomba! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`;

                                gameOver = true;
                            }
    
                        } else{ // IL BLOCCO CLICCATO CONTIENE UNA BOMBA

                            // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_FIRST_BOMB"
                            this.classList.add('square_first_bomb');
    
                            // RICHIAMO LA FUNZIONE REVEAL_ARRAY_BOMBS
                            revealArrayBombs(arrayBombs);
    
                            // STAMPO IL MESSAGGIO NEL DOM
                            message.innerHTML = `Hai perso! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`;

                            gameOver = true;
                        }
                    }
                })

                // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
                grid.append(square);
            }
        break;
    }
})