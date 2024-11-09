var database = require("../database/config");

function Guardar(motivacao, academia, suplemento, frequenciaSemana, objetivo, pesoAtual, alvo, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function Guardar():", motivacao, academia, suplemento, frequenciaSemana, objetivo, pesoAtual, alvo, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // motivacao, academia, suplemento, frequenciaSemana, objetivo, pesoAtual, alvo, fkUsuario
    var instrucaoSql = `
        INSERT INTO curiosidade (motivacao, academia, suplemento, frequenciaSemana, objetivo, pesoAtual, alvo, fkUsuario) VALUES ('${motivacao}', '${academia}', '${suplemento}', '${frequenciaSemana}', '${objetivo}', '${pesoAtual}', '${alvo}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    Guardar
};