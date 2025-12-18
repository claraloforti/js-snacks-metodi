/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel,
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

// Array automobili
const cars = [
  { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
  { marca: "Dacia", modello: "Duster", alimentazione: "gpl" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "BMW", modello: "Serie 3", alimentazione: "diesel" },
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrido" },
  { marca: "Seat", modello: "Ibiza", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "benzina" },
  { marca: "Audi", modello: "A4", alimentazione: "diesel" }
];

// Array auto a benzina
const carsBenzina = cars.filter(car => {
  return car.alimentazione === "benzina";
});

// Array auto a diesel
const carsDiesel = cars.filter(car => {
  return car.alimentazione === "diesel";
});

// Array resto delle auto
const carsOther = cars.filter(car => {
  return car.alimentazione !== "benzina" && car.alimentazione !== "diesel";
});

console.log("Auto a benzina:", carsBenzina);
console.log("Auto a diesel:", carsDiesel);
console.log("Altre auto:", carsOther);

// Mostro in pagina
document.getElementById("benzina").innerHTML =
    carsBenzina.map(car => `
      ${car.marca} ${car.modello}`);


document.getElementById("diesel").innerHTML =
    carsDiesel.map(car => `
      ${car.marca} ${car.modello}`);


document.getElementById("other").innerHTML =
    carsOther.map(car => `
      ${car.marca} ${car.modello}`);



