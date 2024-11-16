var database = require("../database/config");

function registrar(peso, pesoAlvo, fkUsuario) {
    if (pesoAlvo === '') pesoAlvo = 'NULL';
    return database.executar(`
        INSERT INTO progresso (dtRegistro, peso, pesoAlvo, fkUsuario) 
        VALUES (NOW(), ${peso}, ${pesoAlvo}, ${fkUsuario});
    `);
}

function buscarPesos(fkUsuario) {
    return database.executar(`
        SELECT 
            dtRegistro, 
            peso, 
            pesoAlvo 
        FROM progresso 
        WHERE fkUsuario = ${fkUsuario} 
        ORDER BY dtRegistro ASC;
    `);
}

function frequenciaPorIdade() {
    return database.executar(`
        SELECT 
            YEAR(NOW()) - YEAR(dtNasc) AS idade,
            TRUNCATE(AVG(frequenciaSemana), 1) AS 'Frequência Média'
        FROM curiosidade
        GROUP BY idade
        ORDER BY idade;
    `);
}

function contarMotivacao() {
    return database.executar(`
        SELECT motivacao, COUNT(*) AS total
        FROM curiosidade
        GROUP BY motivacao;
    `);
}

module.exports = {
    registrar,
    buscarPesos,
    frequenciaPorIdade,
    contarMotivacao
}