var quizModel = require("../models/quizModel");

function listar(res,req){
    var idUsuario = req.body.idUsuarioServer;
    quizModel.listar(idUsuario).then(function(resultado){

        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar (req, res) {
    console.log("ENTROU NO CADASTRAR")
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontosServer;
    var erros = req.body.errosServer;

    console.log("ID USUARIO: " + idUsuario);
    console.log("PONTOS :" + pontos)


    if(pontos == undefined || erros == undefined){
        res.status(400).send("Sua Pontuação nãõ foi definida")
    }

    quizModel.cadastrar(pontos, erros, idUsuario).then(function(resposta){
        res.status(200).send("Pontos inseridos com sucesso");
    }).catch(function(erro){
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}