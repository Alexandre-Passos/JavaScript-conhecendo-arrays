const notas = [10, 9.2, 4, 3.8, 8]

let somaDeNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDeNotas += notas[i]
}
console.log(somaDeNotas / notas.length)