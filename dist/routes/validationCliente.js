"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRegister = exports.validationUpdate = exports.validationLogin = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const validationLogin = (data) => {
    const schema = {
        telefone: joi_1.default.string().max(12).min(9).required(),
        senha: joi_1.default.string().max(8).min(6).required(),
    };
    return joi_1.default.validate(data, schema);
};
exports.validationLogin = validationLogin;
const validationRegister = (data) => {
    const schema = {
        nome: joi_1.default.string().max(25).min(6).required(),
        telefone: joi_1.default.string().max(12).min(9).required(),
        endereco: joi_1.default.string().max(20).min(15).required(),
        senha: joi_1.default.string().max(8).min(6).required(),
    };
    return joi_1.default.validate(data, schema);
};
exports.validationRegister = validationRegister;
const validationUpdate = (data) => {
    const schema = {
        id: joi_1.default.string().required(),
        nome: joi_1.default.string().max(25).min(6).required(),
        telefone: joi_1.default.string().max(12).min(9).required(),
        endereco: joi_1.default.string().max(50).min(15).required(),
        senha: joi_1.default.string().max(8).min(6).required(),
    };
    return joi_1.default.validate(data, schema);
};
exports.validationUpdate = validationUpdate;
