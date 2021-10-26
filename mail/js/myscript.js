/* definiamo le variabili  */

/* let emailInserita = document.getElementById("mail");

let bottone = document.getElementById("verifica"); */

let verificaMail = document.getElementById("messaggio");

let email = prompt("inserisci la mail");
console.log(email);

/* creiamo un'array */

const mailList = [`gino@hotmail.com`, `gino2@hotmail.com`];
console.log(mailList);

/* prova prompt */

    if (email == mailList) {

        verificaMail.innerHtml = `salve`;
    
    } else if (email != mailList){
    
        verificaMail.innerHtml = `Mi dispiace ma la sua mail non si trova nella lista`;
    
    }

/* andiamo a dare la funzione di click al bottone */

/* bottone.addEventListener("click",

    function(){

        if (emailInserita === mailList) {

            controllo.innerHtml = `Benvenuto nella mail list`;

        } else if (emailInserita !== mailList){

            controllo.innerHtml = `Mi dispiace ma la sua mail non si trova nella lista`;

        }

    }

) */