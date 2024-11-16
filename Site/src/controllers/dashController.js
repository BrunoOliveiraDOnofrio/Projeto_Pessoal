var dashModel = require("../models/dashModel");

function registrar(req, res) {
    var peso = req.body.pesoServer;
    var pesoAlvo = req.body.pesoAlvoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (!peso || isNaN(peso)) {
        res.status(400).send("Peso está indefinido ou inválido!");
    } else if (!fkUsuario || isNaN(fkUsuario)) {
        res.status(400).send("ID do usuário está indefinido ou inválido!");
    } else {
        dashModel
            .registrar(peso, pesoAlvo, fkUsuario)
            .then(() => {
                res.status(201).json({ mensagem: "Registro inserido com sucesso!" });
                return dashModel.buscarPesos(fkUsuario);
            })
            .catch((erro) => {
                console.error("\nErro ao registrar progresso! Erro: ", erro.sqlMessage);
                res.status(500).json({ erro: erro.sqlMessage });
            });
    }
}

function buscarPesos(req, res) {
    var fkUsuario = req.params.fkUsuario;

    if (!fkUsuario || isNaN(fkUsuario)) {
        res.status(400).send("ID do usuário está indefinido ou inválido!");
    } else {
        dashModel
            .buscarPesos(fkUsuario)
            .then((resultado) => {
                res.status(200).json(resultado);
            })
            .catch((erro) => {
                console.error("\nErro ao buscar pesos! Erro: ", erro.sqlMessage);
                res.status(500).json({ erro: erro.sqlMessage });
            });
    }
}


function frequenciaPorIdade(req, res) {
    dashModel.frequenciaPorIdade()
    .then((dados) => {
        if (Array.isArray(dados)) {
            res.status(200).json(dados);
        } else {
            res.status(400).json({ erro: "Os dados recebidos não estão no formato esperado" });
        }
    })
    .catch((erro) => {
        console.error("\nErro ao buscar dados de frequência por idade: ", erro.sqlMessage);
        res.status(500).json({ erro: erro.sqlMessage });
    });
}

function contarMotivacao(req, res) {
    dashModel.contarMotivacao()
        .then((dados) => {
            if (Array.isArray(dados)) {
                res.status(200).json(dados);
            } else {
                res.status(400).json({ erro: "Os dados recebidos não estão no formato esperado" });
            }
        })
        .catch((erro) => {
            console.error("\nErro ao buscar dados de motivação: ", erro.sqlMessage);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}
function kpiFrequencia(req, res) {
    dashModel.kpiFrequencia()
        .then((dados) => {
            if (dados && dados.length > 0) {
                res.status(200).json(dados[0]); // Envia apenas o registro com a maior frequência média
            } else {
                res.status(404).json({ mensagem: "Nenhum dado encontrado para KPI de frequência." });
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar KPI de frequência:", erro);
            res.status(500).json({ erro: erro.sqlMessage || erro.message });
        });
}

function kpiMotivacao(req, res) {
    dashModel.kpiMotivacao()
        .then((dados) => {
            if (dados && dados.length > 0) {
                res.status(200).json(dados[0]); // Envia apenas o registro com maior motivação
            } else {
                res.status(404).json({ mensagem: "Nenhum dado encontrado para KPI de motivação." });
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar KPI de motivação:", erro);
            res.status(500).json({ erro: erro.sqlMessage || erro.message });
        });
}


module.exports = {
    registrar,
    buscarPesos,
    frequenciaPorIdade,
    contarMotivacao,
    kpiMotivacao,
    kpiFrequencia
};