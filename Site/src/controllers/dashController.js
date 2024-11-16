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

function kpiMotivacao(req, res) {
    try {
        const result = dashModel.kpiMotivacao();
        if (result.length > 0) {
            res.status(200).json(result[0]); // Retorna a motivação mais popular
        } else {
            res.status(404).json({ mensagem: "Nenhuma motivação encontrada." });
        }
    } catch (error) {
        console.error("Erro ao buscar motivação mais popular:", error.sqlMessage);
        res.status(500).json({ mensagem: "Erro ao buscar motivação mais popular." });
    }
}

function kpiFrequencia(req, res) {
    try {
        const result = dashModel.kpiFrequencia();
        if (result.length > 0) {
            res.status(200).json(result[0]); // Retorna a idade com maior frequência
        } else {
            res.status(404).json({ mensagem: "Nenhuma frequência encontrada." });
        }
    } catch (error) {
        console.error("Erro ao buscar idade com maior frequência:", error.sqlMessage);
        res.status(500).json({ mensagem: "Erro ao buscar idade com maior frequência." });
    }
}


module.exports = {
    registrar,
    buscarPesos,
    frequenciaPorIdade,
    contarMotivacao,
    kpiMotivacao,
    kpiFrequencia
};