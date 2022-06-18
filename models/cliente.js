const mongoose  = require('mongoose')

const ClienteSchema  = new mongoose.Schema({
    img: {
        type: String,
    },
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('cliente', ClienteSchema)