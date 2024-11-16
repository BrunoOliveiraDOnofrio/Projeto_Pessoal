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

router.get('/kpiMotivacao', function (req, res){
    dashController.kpiMotivacao(req, res);
});

router.get('/kpiFrequencia', function (req, res){
    dashController.kpiFrequencia(req, res);
});



module.exports = router;