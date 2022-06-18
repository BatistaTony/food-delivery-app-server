"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Carrinho = new mongoose_1.default.Schema({
    userid: {
        type: String,
        required: true,
    },
    producto: {
        type: Array,
        required: true,
        pizza: {
            type: Object,
            required: true,
            id: {
                type: String,
                required: true,
            },
            img: {
                type: String,
                required: true,
            },
            nome: {
                type: String,
                required: true,
            },
            preco: {
                type: Number,
                required: true,
            },
            sabores: {
                type: String,
                required: true,
            },
            tamanho: {
                type: String,
                required: true,
            },
            quantidade: {
                type: Number,
                required: true,
            },
            preco_total: {
                type: Number,
                required: true,
            },
        },
    },
    data_car: {
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pendente",
    },
    entregado: {
        type: Boolean,
        default: false,
    },
    closed: {
        type: Boolean,
        default: false,
    },
    userObj: {
        type: Object,
        required: true,
    },
    preco_total: {
        type: Number,
        default: 0,
    },
    quantidade_total: {
        type: Number,
        default: 0,
    },
});
exports.Cart = mongoose_1.default.model("carrinho", Carrinho);
