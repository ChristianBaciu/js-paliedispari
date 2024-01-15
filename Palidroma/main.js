const Palidroma = prompt("Palidroma: Scrivi una parola:", "otto")

// funzione per Palidroma
function validator() {

    const parola = Palidroma.length; // length lunghezza
 
    // per verificare se le metà della parola sono uguali
    for(let i = 0; i < parola / 2; i++) {

        if(Palidroma[i] !== Palidroma[parola - 1 - i]) {
            alert("Non è una parola Palidroma")
        }
    }
    alert("E' una parola Palidroma")
}

const value = validator(Palidroma)
console.log(value)