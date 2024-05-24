// array con tutte le squadre
const squadre = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 }
];



// generazione random dei falli e dei punti
for (const squadra of squadre) {
    squadra.puntiFatti = generaNumeroCasuale(1, 100);
    squadra.falliSubiti = generaNumeroCasuale(1, 50);
}


// assegnazione dei falli
const squadreNomiFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// assegnazione dei punti
const squadrePuntiFatti = squadre.map(({ nome, puntiFatti }) => ({ nome, puntiFatti }));


// risultato in console di tutti i falli delle 
console.log("Squadre con nomi e falli subiti:", squadreNomiFalli);
console.log("Squadre con nomi e punti fatti:", squadrePuntiFatti);

// # Sezione Funzioni ---------------------------------------------

// per generare un numero random
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}