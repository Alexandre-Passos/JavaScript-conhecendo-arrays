const alunos = ['Alexandre', 'Bruna', 'Caroline']
const notaFinal = [10, 5, 7]

const lista = [alunos, notaFinal]

const exibirNota = (nomeAluno) => {
    if (lista[0].includes(nomeAluno)) {
        const indice = lista[0].indexOf(nomeAluno)
        const mediaAluno = lista[1][indice]
        console.log(`${nomeAluno}: ${mediaAluno}`)
    }
    else{
        console.log('Aluno não encontrado')
    }
}

exibirNota('Bruna')