const Sequelize = require('sequelize')
const sequelize = new Sequelize('dsm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})

sequelize.authenticate().then(function(){
    console.log('ok')
}).catch(function(erro){
    console.log('não ok ' + erro)
})

const agendamentos = sequelize.define('agendamentos',{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observasao:{
        type: Sequelize.STRING
    }
})

module.exports = agendamentos