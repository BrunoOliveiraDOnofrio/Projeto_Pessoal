var database = require("../database/config");

function Guardar(motivacao, academia, suplemento, dtNasc, frequenciaSemana, objetivo, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function Guardar():", motivacao, academia, suplemento, dtNasc, frequenciaSemana, objetivo, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // motivacao, academia, suplemento, frequenciaSemana, objetivo, pesoAtual, alvo, fkUsuario
    var instrucaoSql = `
        INSERT INTO curiosidade (motivacao, academia, suplemento, dtNasc, frequenciaSemana, objetivo, fkUsuario) VALUES ('${motivacao}', '${academia}', '${suplemento}', '${dtNasc}', '${frequenciaSemana}', '${objetivo}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarRegistro(fkUsuario) {
    return database.executar(`
        SELECT idCuriosidade 
        FROM curiosidade 
        WHERE fkUsuario = ${fkUsuario};
    `);
}

module.exports = {
    Guardar,
    verificarRegistro
};