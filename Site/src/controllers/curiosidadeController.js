var curiosidadeModel = require("../models/curiosidadeModel");
const database = require('../database/config');

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
const obterFrequenciaPorIdade = async (req, res) => {
    try {
      // Definindo a consulta SQL
      const instrucaoSql = "SELECT dtNasc, frequenciaSemana FROM curiosidade";
  
      // Executando a consulta no banco de dados
      const resultado = await database.executar(instrucaoSql);
  
      // Verificando se o banco retornou dados
      if (resultado && resultado.length > 0) {
        // Enviando os dados encontrados como resposta JSON
        res.status(200).json({ dados: resultado });
      } else {
        // Caso não haja dados
        res.status(404).json({ mensagem: 'Nenhum dado encontrado' });
      }
    } catch (err) {
      // Em caso de erro ao executar a consulta ou processar os dados
      console.error('Erro ao buscar dados:', err);
      res.status(500).send({ erro: 'Erro ao buscar frequência por idade' });
    }
  };

module.exports = {
    Guardar,
    obterFrequenciaPorIdade
}