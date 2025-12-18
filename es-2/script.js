/*
A partire da un array di stringhe,
crea un secondo array formattando
le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
*/

// ARRAY STRINGHE
const nomi = ['pippo', 'PLUTO', 'Paperino'];

// Creo un secondo array formattando le stringhe in minuscolo con iniziale maiuscola
const nomiFormattati = nomi.map(nome => {
    return nome[0].toUpperCase() + nome.substring(1).toLowerCase();
});

console.log(nomiFormattati);

document.getElementById('risultato').innerHTML = "I nomi formattati sono: " + nomiFormattati.join(', ');
