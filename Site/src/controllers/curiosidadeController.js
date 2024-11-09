var curiosidadeModel = require("../models/curiosidadeModel");


function Guardar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var motivacao = req.body.motivacaoServer;
    var academia = req.body.academiaServer;
    var suplemento = req.body.suplementoServer;
    var frequenciaSemana = req.body.frequenciaSemanaServer;
    var objetivo = req.body.objetivoServer;

    var pesoAtual = req.body.pesoAtualServer;
    var alvo = req.body.alvoServer;
    var fkUsuario = req.body.fkUsuarioServer


    // Faça as validações dos valores
    if (motivacao == '#') {
        res.status(400).send("Selecione Algo!");
    } else if (academia == '#') {
        res.status(400).send("Selecione Algo!");
    } else if (suplemento == '#') {
        res.status(400).send("Selecione Algo!");
    } else if (frequenciaSemana == '#') {
        res.status(400).send("Selecione Algo!");
    } else if(objetivo == '#'){
        res.status(400).send("Selecione Algo!");
    }else if(pesoAtual == undefined){
        res.status(400).send("Fale seu Peso!");
    }else if(alvo == undefined){
        res.status(400).send("Escolha seu Peso!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curiosidadeModel.Guardar(motivacao, academia, suplemento, frequenciaSemana, objetivo, pesoAtual, alvo, fkUsuario)
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

module.exports = {
    Guardar
}