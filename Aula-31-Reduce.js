const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const somaJs = salaJS.reduce((acumulador, elemento) => acumulador + elemento, 0) / salaJS.length
const somaJava = salaJava.reduce((acumulador, elemento) => acumulador + elemento, 0) / salaJava.length
const somaPython = salaPython.reduce((acumulador, elemento) => acumulador + elemento, 0) / salaPython.length

console.log(somaJs)
console.log(somaJava)
console.log(somaPython)
console.log(somaJs + somaJava + somaPython)