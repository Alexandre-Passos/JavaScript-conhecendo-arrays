const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro', 'AMA']
const medias = [10, 7, 9, 6, 10]

const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length <= 3
})

console.log(tamanhoNome)