const {filmes} = require("./filmes")
var validator = require('validator');

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
    try {
        if (
            validator.isEmpty(id) ||
            validator.isEmpty(titulo) ||
            validator.isEmpty(genero) ||
            validator.isEmpty(dataLancamento) ||
            validator.isEmpty(diretor) ||
            validator.isEmpty(elenco) ||
            validator.isEmpty(classificacao) ||
            validator.isEmpty(duracao) ||
            validator.isEmpty(status)
        ) {
            console.error("Todos os campos devem ser preenchidos")
            return
        }
    } catch (error) {
        
    }
    filmes.push(novoFilme);
    console.log(`O filme '${novoFilme.titulo}' foi lançado com sucesso!`);
};

module.exports = {criarFilme};