const prompt = require("prompt-sync")();

const {criarFilme} = require("./filme/criarFilme");
const {lerFilmes} = require("./filme/lerFilmes");
const {atualizarFilme} = require("./filme/atualizarFilme");
const {deletarFilme} = require("./filme/deletarFilme");

criarFilme("1a2a3a", "Como Perder um Homem em 10 Dias", "Comédia Romantica", "10/09/2026", "Donald Petrie", "Kate Hudson e Matthew McConaughey", "+16", "1h46min", "nota 8.5");
criarFilme("1b2b3b", "Halloween", "Terror Slasher", "28/10/2025", "John Carpenter", "Donald Pleasence e Jamie Lee Curtis", "+18", "1h57min", "nota: 7.8");
lerFilmes();

atualizarFilme("1a2a3a", "Como Não Conquistar um Homem em 10 Dias", "02/10/2026", "Comédia", "nota 8");
lerFilmes();

// deletarFilme("1a2a3a");
// lerFilmes();