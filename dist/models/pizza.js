"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const pizzaSchema = mongoose_1.default.Schema({
    nome: {
        type: String,
        required: true,
    },
    sabores: {
        type: String,
        required: true,
    },
    tamanho: {
        type: Object,
        required: true,
        familiar: {
            preco: {
                type: Number,
                required: true,
            },
        },
        grande: {
            preco: {
                type: Number,
                required: true,
            },
        },
        media: {
            preco: {
                type: Number,
                required: true,
            },
        },
        broto: {
            preco: {
                type: Number,
                required: true,
            },
        },
    },
});
exports.Pizza = mongoose_1.default.model("pizza", pizzaSchema);
