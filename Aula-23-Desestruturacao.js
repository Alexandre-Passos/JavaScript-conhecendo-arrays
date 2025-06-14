const alunos = ['Alexandre', 'Bruna', 'Caroline']
const notaFinal = [10, 5, 7]

const lista = [alunos, notaFinal]

const exibirNota = (nomeAluno) => {
    if (lista[0].includes(nomeAluno)) {
        const [alunos, notas] = lista
        const indice = alunos.indexOf(nomeAluno)
        const mediaAluno = notas[indice]
        console.log(`${nomeAluno}: ${mediaAluno}`)
    }
    else{
        console.log('Aluno não encontrado')
    }
}

exibirNota('Bruna')