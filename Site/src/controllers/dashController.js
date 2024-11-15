var dashModel = require("../models/dashModel");

function registrar(req, res) {
    var peso = req.body.pesoServer;
    var pesoAlvo = req.body.pesoAtualServer;
    var fkUsuario = req.body.fkUsuarioServer;
    if(peso == undefined){
        res.status(400).send("Seu peso está undefined!");
    }else {

        dashModel.registrar(peso, pesoAlvo, fkUsuario)
        .then(
            function (resultado){
                res.json(resultado)
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o registro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }

}

module.exports = {
    registrar
}