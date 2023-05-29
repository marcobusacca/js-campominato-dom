PROBLEMA : L'utente sceglie una Difficoltà tramite una Select e clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, in base alla Difficoltà che ha scelto l'utente.

Difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe.

Difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe.

Difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


- Creare Struttura e Stile HTML & CSS;


- Creare una Funzione (createEasySquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'easy_square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Creare una Funzione (createMediumSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'medium_square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Creare una Funzione (createHardSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'hard_square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Usare il comando "document.getElementById('')" per recuperare il Button HTML "play" ed inserirlo in una Constante (playButton);


- QUANDO l'utente clicca sul "playButton":

    - Usare il comando "document.getElementById('')" per recuperare il container HTML dove inserire la Griglia composta dagli Square, ed inserirlo in una Constante (grid);

    - Ripristino la Griglia = grid.innerHTML = '';

    - Usare il comando "parseInt(document.getElementById('').value)" per recuperare la select HTML dove l'utente ha scelto la Difficoltà, ed inserirla in una Constante (difficult);

    - Dichiarare una Variabile che Definisce la Grandezza Totale della Griglia (gridSize);

    - ? switch (difficult):

        - case 1 : // L'utente ha scelto Difficoltà Easy

            - Assegnare la Grandezza Totale della Griglia in Difficoltà Easy (gridSize = 100);

            - Creare un Ciclo FOR che scorre da 1 a (gridSize):

                - Inserire dentro una Constante (square) il richiamo della Funzione (createEasySquare);

                - Inserire (InnerText) l'Indice dentro la Constante (square);

                - QUANDO l'utente clicca nell'elemento (square):

                    - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

                - Appendere (append) dentro la Constante (grid) la Constante (square).

        - break;


        - case 2 : // L'utente ha scelto Difficoltà Medium

            - Assegnare la Grandezza Totale della Griglia in Difficoltà Easy (gridSize = 81);

            - Creare un Ciclo FOR che scorre da 1 a (gridSize):

                - Inserire dentro una Constante (square) il richiamo della Funzione (createMediumSquare);

                - Inserire (InnerText) l'Indice dentro la Constante (square);

                - QUANDO l'utente clicca nell'elemento (square):

                    - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

                - Appendere (append) dentro la Constante (grid) la Constante (square).

        - break;


        - case 3 : // L'utente ha scelto Difficoltà Hard

            - Assegnare la Grandezza Totale della Griglia in Difficoltà Easy (gridSize = 49);

            - Creare un Ciclo FOR che scorre da 1 a (gridSize):

                - Inserire dentro una Constante (square) il richiamo della Funzione (createHardSquare);

                - Inserire (InnerText) l'Indice dentro la Constante (square);

                - QUANDO l'utente clicca nell'elemento (square):

                    - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

                - Appendere (append) dentro la Constante (grid) la Constante (square).

        - break;