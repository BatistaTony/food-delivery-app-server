"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const registerValidation = (data) => {
    const schema = {
        nome: joi_1.default.string().min(7).max(35).required(),
        email: joi_1.default.string().min(10).max(35).email().required(),
        senha: joi_1.default.string().min(6).max(10).required(),
    };
    return joi_1.default.validate(data, schema);
};
exports.registerValidation = registerValidation;
const loginValidation = (data) => {
    const schema = {
        email: joi_1.default.string().min(10).max(35).email().required(),
        senha: joi_1.default.string().min(6).max(10).required(),
    };
    return joi_1.default.validate(data, schema);
};
exports.loginValidation = loginValidation;
