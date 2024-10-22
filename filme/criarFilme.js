const {filmes} = require("./filmes")

function criarFilme(id, titulo, genero, dataLancamento, diretor, elenco, classificacao, duracao, status) {
    const novoFilme = {
        id: id,
        titulo: titulo,
        genero: genero,
        dataLancamento: dataLancamento,
        diretor: diretor,
        elenco: elenco,
        classificacao: classificacao,
        duracao: duracao,
        status: status,
    };
    filmes.push(novoFilme);
    console.log(`O filme '${novoFilme.titulo}' foi lançado com sucesso!`);
};

module.exports = {criarFilme};