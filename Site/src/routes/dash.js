var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/registrar", function (req, res) {
    dashController.registrar(req, res);
});

router.get("/buscarPesos/:fkUsuario", function (req, res) {
    dashController.buscarPesos(req, res);
});

router.get("/frequenciaPorIdade", function (req, res) {
    dashController.frequenciaPorIdade(req, res);
});

router.get("/contarMotivacao", function (req, res) {
    dashController.contarMotivacao(req, res);
});
module.exports = router;