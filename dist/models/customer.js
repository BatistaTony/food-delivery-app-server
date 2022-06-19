"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ClienteSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
    },
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: Number,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
});
exports.Customer = {};
