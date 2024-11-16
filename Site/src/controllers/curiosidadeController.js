var curiosidadeModel = require("../models/curiosidadeModel");

function Guardar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var motivacao = req.body.motivacaoServer;
    var academia = req.body.academiaServer;
    var suplemento = req.body.suplementoServer;
    var frequenciaSemana = req.body.frequenciaSemanaServer;
    var objetivo = req.body.objetivoServer;
    var dtNasc = req .body.dtNascServer;

    var fkUsuario = req.body.fkUsuarioServer


    // Faça as validações dos valores
    if (motivacao == '#') {
        res.status(400).send("Selecione Algo!");
    } else if (academia == '#') {
        res.status(400).send("Selecione Algo!");
    } else if (suplemento == '#') {
        res.status(400).send("Selecione Algo!");
    } else if(dtNasc == undefined){
        res.status(400).send("Fale sua idade!");
    } else if (frequenciaSemana == '#') {
        res.status(400).send("Selecione Algo!");
    } else if(objetivo == '#'){
        res.status(400).send("Selecione Algo!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curiosidadeModel.Guardar(motivacao, academia, suplemento, dtNasc, frequenciaSemana, objetivo, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o armazenamento! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verificarRegistro(req, res) {
    const fkUsuario = req.params.fkUsuario;

    curiosidadeModel.verificarRegistro(fkUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json({ possuiRegistro: true });
            } else {
                res.status(200).json({ possuiRegistro: false });
            }
        })
        .catch((erro) => {
            console.error("\nErro ao verificar registro na tabela curiosidade: ", erro.sqlMessage);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}

module.exports = {
    Guardar,
    verificarRegistro
}