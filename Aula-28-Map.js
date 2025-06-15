const notas = [10, 4.4, 6.7, 8.3, 6.6]

const notasAtualizadasComMap = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notasAtualizadasComMap)