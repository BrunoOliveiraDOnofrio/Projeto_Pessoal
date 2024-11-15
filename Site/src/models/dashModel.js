var database = require("../database/config");

function registrar(peso, pesoAlvo, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function Guardar():", dtRegistro, peso, pesoAlvo, fkUsuario);

    var hoje = Date.now();
    var instrucaoSql = `INSERT INTO progresso (dtRegistro, peso, pesoAlvo, fkUsuario) VALUES ('${hoje}', '${peso}', '${pesoAlvo}', '${fkUsuario}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
}