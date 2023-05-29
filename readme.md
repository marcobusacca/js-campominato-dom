PROBLEMA : L'utente sceglie una Difficoltà tramite una Select e clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, in base alla Difficoltà che ha scelto l'utente.

Difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe.

Difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe.

Difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


- Creare Struttura e Stile HTML & CSS;

- Inserire dentro l'HTML il Container del Messaggio Finale per l'utente;


- Creare una Funzione (createEasySquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'easy_square' alla Constante (square);

    - Ritorna (return) la Constante (square).


- Creare una Funzione (createMediumSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'medium_square' alla Constante (square);

    - Ritorna (return) la Constante (square).


- Creare una Funzione (createHardSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'hard_square' alla Constante (square);

    - Ritorna (return) la Constante (square).


- Creare una Funzione (createRandomNumber(min, max)) che genera dei Numeri Casuali da 1 alla Grandezza della Griglia in base ad ogni Difficoltà:

    - Ritorna (return): Math.floor(Math.random() * (max - min + 1) + min).


- Creare una Funzione (checkArrayBombs(arrayBombs, max)) che Controlla se ogni Numero Generato è già presente nell'Array che contiene i Numeri Casuali Generati:

    - Dichiarare una Variabile di Controllo: (let numberCheck = false);

    - Dichiarare una Variabile che Contiene il Numero Casuale: (let randomNumber);

    - Creare un CICLO WHILE che viene eseguito fin quando (numberCheck === false):

        - Richiamo la Funzione (createRandomNumber(1, max)) e la inserisco dentro la Variabile randomNumber;

        - ? SE l'array NON include il Numero Random Generato (!arrayBombs.includes(randomNumber)), ALLORA:

            - numberCheck = true;
        
        - ALTRIMENTI: ricomincia il Ciclo dall'inizio.


- Creare una Funzione (generateArrayBombs(arrayBombs, max, maxBombs)) che Genera le Bombe:

    - Creare un CICLO FOR che scorre da 1 al numero massimo di Bombe da generare (maxBombs):

        - Richiamo la Funzione (fillArrayBombs(arrayBombs, max)) e la inserisco dentro la Variabile randomNumber;

        - Inserisco dentro l'arrayBombs la Variabile randomNumber (arrayBombs.push(randomNumber));

    - Stampo nella console il contenuto dell'arrayBombs ordinandolo tramite il comando sort (console.log(arrayBombs.sort(function(a, b){return a-b}))); // ALLA FINE DELL'ESERCIZIO RIMUOVERLO


- Usare il comando "document.getElementById('')" per recuperare il Button HTML "play" ed inserirlo in una Constante (playButton);


- QUANDO l'utente clicca sul "playButton":

    - Usare il comando "parseInt(document.getElementById('').value)" per recuperare la select HTML dove l'utente ha scelto la Difficoltà, ed inserirla in una Constante (difficult);

    - Usare il comando "document.getElementById('')" per recuperare il container HTML dove inserire la Griglia composta dagli Square, ed inserirlo in una Constante (grid);

    - Usare il comando "document.getElementById('')" per recuperare il container HTML dove inserire il Messaggio per l'utente, ed inserirlo in una Constante (message);


    - Ripristino la Griglia = grid.innerHTML = '';

    - Ripristino il Messaggio = message.innerHTML = '';


    - Dichiarare una Variabile che Definisce la Grandezza Totale della Griglia (gridSize);

    - Dichiarare una Constante che Definisce la Quantità Totale delle Bombe (const bombSize = 16);

    - Dichiarare l'array che conterrà le Bombe (let arrayBombs = []);

    - Dichiarare una Variabile che definisce il Numero di Caselle Senza Bombe cliccate dall'utente (let validSquareClicked = 0);


    - ? switch (difficult):

        - case 1 : // L'utente ha scelto Difficoltà Easy

            - Assegnare la Grandezza Totale della Griglia in Difficoltà Easy (gridSize = 100);

            - Richiama la Funzione per Generare le Bombe (generateArrayBombs(arrayBombs, gridSize, bombSize));

            - Creare un Ciclo FOR che scorre da 1 a (gridSize):

                - Inserire dentro una Constante (square) il richiamo della Funzione (createEasySquare);

                - Inserire (InnerText) l'Indice dentro la Constante (square);

                - QUANDO l'utente clicca nell'elemento (square):

                    - ? SE l'arrayBombs NON include l'Indice dell'elemento cliccato dall'utente (!arrayBombs.includes(parseInt(this.innerText))), ALLORA: // IL BLOCCO CLICCATO NON CONTIENE UNA BOMBA

                        - Aggiungo al blocco cliccato la classe "square_selected": this.classList.add('square_selected');

                        - Incremento la Variabile validSquareClicked;

                        - ? SE la Variabile validSquareClicked è UGUALE a (gridSize - bombSize), ALLORA: // L'UTENTE HA CLICCATO TUTTE LE CASELLE SENZA BOMBE

                            - Stampa a schermo un messaggio per l'utente: message.innerHTML = `Hai vinto! <br> Non hai beccato nessuna bomba! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`

                    - ALTRIMENTI:  // IL BLOCCO CLICCATO CONTIENE UNA BOMBA

                        - Aggiungo al blocco cliccato la classe "square_bomb": this.classList.add('square_bomb');

                        - Stampa a schermo un messaggio per l'utente: message.innerHTML = `Hai perso! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`

                - Appendere (append) dentro la Constante (grid) la Constante (square).

        - break;


        - case 2 : // L'utente ha scelto Difficoltà Medium

            - Assegnare la Grandezza Totale della Griglia in Difficoltà Easy (gridSize = 81);

            - Richiama la Funzione per Generare le Bombe (generateArrayBombs(arrayBombs, gridSize, bombSize));

            - Creare un Ciclo FOR che scorre da 1 a (gridSize):

                - Inserire dentro una Constante (square) il richiamo della Funzione (createMediumSquare);

                - Inserire (InnerText) l'Indice dentro la Constante (square);

                - QUANDO l'utente clicca nell'elemento (square):

                    - ? SE l'arrayBombs NON include l'Indice dell'elemento cliccato dall'utente (!arrayBombs.includes(parseInt(this.innerText))), ALLORA: // IL BLOCCO CLICCATO NON CONTIENE UNA BOMBA

                        - Aggiungo al blocco cliccato la classe "square_selected": this.classList.add('square_selected');

                        - Incremento la Variabile validSquareClicked;

                        - ? SE la Variabile validSquareClicked è UGUALE a (gridSize - bombSize), ALLORA: // L'UTENTE HA CLICCATO TUTTE LE CASELLE SENZA BOMBE

                            - Stampa a schermo un messaggio per l'utente: message.innerHTML = `Hai vinto! <br> Non hai beccato nessuna bomba! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`

                    - ALTRIMENTI:  // IL BLOCCO CLICCATO CONTIENE UNA BOMBA

                        - Aggiungo al blocco cliccato la classe "square_bomb": this.classList.add('square_bomb');

                        - Stampa a schermo un messaggio per l'utente: message.innerHTML = `Hai perso! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`

                - Appendere (append) dentro la Constante (grid) la Constante (square).

        - break;


        - case 3 : // L'utente ha scelto Difficoltà Hard

            - Assegnare la Grandezza Totale della Griglia in Difficoltà Easy (gridSize = 49);

            - Richiama la Funzione per Generare le Bombe (generateArrayBombs(arrayBombs, gridSize, bombSize));

            - Creare un Ciclo FOR che scorre da 1 a (gridSize):

                - Inserire dentro una Constante (square) il richiamo della Funzione (createHardSquare);

                - Inserire (InnerText) l'Indice dentro la Constante (square);

                - QUANDO l'utente clicca nell'elemento (square):

                    - ? SE l'arrayBombs NON include l'Indice dell'elemento cliccato dall'utente (!arrayBombs.includes(parseInt(this.innerText))), ALLORA: // IL BLOCCO CLICCATO NON CONTIENE UNA BOMBA

                        - Aggiungo al blocco cliccato la classe "square_selected": this.classList.add('square_selected');

                        - Incremento la Variabile validSquareClicked;

                        - ? SE la Variabile validSquareClicked è UGUALE a (gridSize - bombSize), ALLORA: // L'UTENTE HA CLICCATO TUTTE LE CASELLE SENZA BOMBE

                            - Stampa a schermo un messaggio per l'utente: message.innerHTML = `Hai vinto! <br> Non hai beccato nessuna bomba! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`

                    - ALTRIMENTI:  // IL BLOCCO CLICCATO CONTIENE UNA BOMBA

                        - Aggiungo al blocco cliccato la classe "square_bomb": this.classList.add('square_bomb');

                        - Stampa a schermo un messaggio per l'utente: message.innerHTML = `Hai perso! <br> Punteggio : ${validSquareClicked} blocchi scoperti!`

                - Appendere (append) dentro la Constante (grid) la Constante (square).

        - break;