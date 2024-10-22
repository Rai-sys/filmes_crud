const {filmes} = require("./filmes")

function deletarFilme(id) {
    try {
        const indice = filmes.findIndex(filme =>
            filme.id === id)
        if (indice === -1) {
            console.log("Esse filme não existe!");
        } else {
            filmes.splice(indice, 1);
            console.log("Filme deletado com sucesso!");
        }
    } catch (error) {
        console.error("Erro ao deletar filme!");
    }
};

module.exports = {deletarFilme};