/*toLowerCase serve per convertire tutti i caratteri in 
lettere minuscole*/
let sceltaPariODispari = prompt ("pari o dispari", "pari").toLowerCase()

let numeroScelto = parseInt (prompt("scegli un numero da 1 a 5", "3"))

// funzione numeri random
function randomica(max){
    return Math.floor(Math.random()* max) + 1
}

// il pc sceglie un numero da 1 a 5
let numeroPc = randomica(5)

// somma in numero che ho scelto con il numero scelto dal pc
let somma = numeroScelto + numeroPc

// funzione per pari e dispari
function pariOdispari(n){
    if(n % 2 == 0){
        return "pari"
    }else{
        return "dispari"
    }
}

// la sua funzione è quella di controllare se i numeri sono uguali
if(sceltaPariODispari === pariOdispari(somma)){
    document.writeln("ha vinto l'utente")
}else{
    document.writeln("ha vinto il pc")
}
