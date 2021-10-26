/* definiamo le variabili */

let userButton = document.getElementById("bottoneutente");

let you = document.getElementById("numeroutente");

let pc = document.getElementById("numeropc");

let winner = document.getElementById("vincitore");

/* facciamo generare all'utente un numero casuale per lui e il pc*/

userButton.addEventListener("click",

    function(){

        let userNum = Math.floor(Math.random() * 6) + 1;
        console.log(userNum);
        you.innerHTML = `Il tuo numero è: ${userNum}`;

        let pcNum = Math.floor(Math.random() * 6) + 1;
        console.log(pcNum);
        pc.innerHTML = `Il numero del pc è: ${pcNum}`;

        /* poniamo le condizioni per la vittoria, sconfitta o pareggio */

        if (userNum > pcNum) {

            winner.innerHTML = `Complimenti, hai vinto!`;
        
        } else if (userNum < pcNum) {
        
            winner.innerHTML = `Mi dispiace, hai perso!`;
        
        } else {
        
            winner.innerHTML = `Hai pareggiato!`
        
        }

    }

)
