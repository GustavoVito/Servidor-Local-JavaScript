const express = require("express")
const agendamentos = require("./banco")
const app = express()

app.listen(8081,function(){
    console.log("Servidor Ativo!")
})

app.get("/cadastrar/:nome",function(req, res){
    agendamentos.create({
        nome: req.params.nome
    })
    res.send("Dados Cadastrados com Sucesso!")
})