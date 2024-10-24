const {filmes} = require("./filmes")
var validator = require('validator');

function atualizarFilme(id, novoTitulo, novoLancamento, novaClassificacao, novoStatus) {
    try {
        const filme = filmes.find(filme => 
            filme.id === id)
        if (filme) {
            filme.titulo = novoTitulo,
            filme.dataLancamento = novoLancamento,
            filme.classificacao = novaClassificacao,
            filme.status = novoStatus,

            validator.isEmpty(novoTitulo) ||
            validator.isEmpty(novoLancamento) ||
            validator.isEmpty(novaClassificacao) ||
            validator.isEmpty(novoStatus)

            console.log("O filme foi atualizado com sucesso!");
            console.error("Todos os campos devem ser preenchidos");
        } else {
            console.log("Filme não encontrado para atualizar.");
        }
    } catch (error) {
        console.error("Erro ao atualizar o filme!", error.message);
    }
};

module.exports = {atualizarFilme};