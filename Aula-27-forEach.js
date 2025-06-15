const notas = [10, 4.4, 6.7, 8.3, 6.6]

let acumulador = 0

//O ForEach chama uma função callback
notas.forEach((nota) => {
    acumulador += nota
})

console.log(acumulador / notas.length)