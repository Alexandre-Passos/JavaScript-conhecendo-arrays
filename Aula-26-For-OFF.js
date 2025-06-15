const notas = [10, 4.5, 7.3, 9.2, 5.5]

let acumulador = 0

for (let nota of notas) {
    acumulador += nota
}

const media = acumulador / notas.length

console.log(media)