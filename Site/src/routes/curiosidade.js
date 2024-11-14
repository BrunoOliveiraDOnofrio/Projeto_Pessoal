var express = require("express");
var router = express.Router();

var curiosidadeController = require("../controllers/curiosidadeController");

router.post("/Guardar", function (req, res) {
    curiosidadeController.Guardar(req, res);
});

router.get("/frequencia_por_idade", function(req, res){
    curiosidadeController.obterFrequenciaPorIdade(req, res);
});

module.exports = router;