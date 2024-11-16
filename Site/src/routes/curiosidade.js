var express = require("express");
var router = express.Router();

var curiosidadeController = require("../controllers/curiosidadeController");

router.post("/Guardar", function (req, res) {
    curiosidadeController.Guardar(req, res);
});

router.get('/verificar/:fkUsuario', function (req, res) {
    curiosidadeController.verificarRegistro(req, res);
});

module.exports = router;