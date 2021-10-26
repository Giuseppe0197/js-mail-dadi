/* definiamo le variabili  */

/* let emailInserita = document.getElementById("mail");

let bottone = document.getElementById("verifica"); */

let verificaMail = document.getElementById("messaggio");

let email = prompt("inserisci la mail");
console.log(email);

let found = false;

/* creiamo un'array */

const mailList = ["gino@hotmail.com", "gino2@hotmail.com", "gino3@hotmail.com", "gino4@hotmail.com", "gino5@hotmail.com", "gino6@hotmail.com"];
console.log(mailList);

/* prova prompt */

for (i = 0; i < mailList.length; i++){
    if (email == mailList[i]) {
        found = true;
    }
}

if (found == true) {
    verificaMail.innerHTML = `Salve ${email}`;
} else {
    verificaMail.innerHTML = 'Siamo spiacenti ma la sua mail non si trova nella lista.';
}


/* andiamo a dare la funzione di click al bottone */

/* bottone.addEventListener("click",

    function(){

        for (i = 0; i < mailList.length; i++){
            if (emailInserita == mailList[i]) {
                found = true;
            }
        }
        
        if (found == true) {
            verificaMail.innerHTML = `Salve ${emailInserita}`;
        } else {
            verificaMail.innerHTML = 'Siamo spiacenti ma la sua mail non si trova nella lista.';
        }

    }

) */