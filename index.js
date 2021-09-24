//Declara uma constante
const listaPecas = ['Peca de teste', 'AB', 'Peca B']

//Exibe um texto
console.log('quantidade de caracteres')
//estrutura consicional
if (listaPecas.lenght <= 10) {
    console.log('as peças podem ser cadastradas');
}
consosle.log('quantidade de caracteres')
for (let index = 0; index < listaPecas.lenght; index++) {
    const pecaAtual = listaPecas[index];
    if (pecaAtual.legth < 3) {
        console.log(pecaAtual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
        console.log(pecaAtual + ': a peça pode ser cadastrada.')
    }
}
console.log('pesso da peça')
const pesoPecaG = 50;
if (pesoPecaG >= 100) {
    console.log('peso suficiente.')
} else {
    console.log('valor insuficiente')
}
