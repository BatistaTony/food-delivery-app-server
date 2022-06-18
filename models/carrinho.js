const mongoose  = require('mongoose')


const Carrinho  = new mongoose.Schema({
    userid: {
        type: String,
        required:true
    },
    producto: {
        type: Array,
        required:true,
        pizza: {
            type: Object,
            required: true,

            id:{
                type: String,
                required:true
            },
            img: {
                type: String,
                required: true
            },
            nome: {
                type: String,
                required:true
            },
            preco:{
                type: Number,
                required:true
            },
            sabores:{
                type: String,
                required:true
            },
            tamanho:{
                type: String,
                required:true
            },
            quantidade:{
                type: Number,
                required:true
            },
            preco_total:{
                type: Number,
                required:true
            }
        }
        

    },

    data_car: {
        type: Date,
        required:true
    },
    endereco: {
        type: String,
        required:true
    },
    status: {
        type: String,
        default: 'Pendente'
    },
    entregado: {
        type:Boolean,
        default: false
    },
    closed: {
        type: Boolean,
        default:false
    },
    userObj: {
        type: Object,
        required:true
    },
    preco_total: {
        type: Number,
        default: 0
    },
    quantidade_total: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('carrinho', Carrinho)