/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona,
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

// ARRAY PERSONE
const people = [
    { name: "Luca", lastName: "Rossi", age: 18 },
    { name: "Maria", lastName: "Bianchi", age: 16 },
    { name: "Giovanni", lastName: "Verdi", age: 20 },
    { name: "Anna", lastName: "Neri", age: 15 }
];

// Creo nuovo array inserendo per ognuno nome e cognome e se può guidare
const drivingPeople = people.map(person => {
    const { name, lastName, age } = person;
    const canDrive = age >= 18 ? "può" : "non può";

    return `${name} ${lastName} ${canDrive} guidare`;

});
console.log(drivingPeople);