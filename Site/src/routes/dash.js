var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/registrar" , function(req, res){
    dashController.registrar(req, res);
});

module.exports = router;