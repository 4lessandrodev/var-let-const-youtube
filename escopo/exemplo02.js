var idadeA = 18;
let idadeB = 18;
const idadeC = 18;

const carro = {
    modelo: "Fiat",
    ano:2020
};
const frutas = ["pera", "maçã", "uva"];

console.log(" var : " + idadeA);
idadeA = 21;
console.log(" var : " + idadeA);

console.log(" let : " + idadeB);
idadeB = 21;
console.log(" let : " + idadeB);

console.table(frutas);
frutas.push("Abacaxi");
frutas.shift("pera");
console.table(frutas);