const {filmes} = require("./filmes")

function lerFilmes() {
    try {
        console.log(filmes);
    } catch (error) {
        console.error("Nenhum filme lançado!", error.message);
    }
};

module.exports = {lerFilmes};