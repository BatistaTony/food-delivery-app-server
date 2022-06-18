"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRoutes = void 0;
const express_1 = require("express");
const cliente_1 = require("../models/cliente");
const bcrypt = __importStar(require("bcryptjs"));
const validationCliente_1 = require("./validationCliente");
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const clientRoutes = (0, express_1.Router)();
exports.clientRoutes = clientRoutes;
clientRoutes.get("/get", async (req, res) => {
    try {
        const allclients = await cliente_1.Cliente.find();
        res.json(allclients);
    }
    catch (error) {
        res.json(error);
    }
});
clientRoutes.post("/register", async (req, res) => {
    const { error } = (0, validationCliente_1.validationRegister)(req.body);
    if (error) {
        res.json({ message: error.details[0].message });
    }
    else {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.senha, salt);
        function imgValue() {
            if (!req.body.img) {
                return "user.png";
            }
            else {
                return req.body.img;
            }
        }
        const clienteObj = new cliente_1.Cliente({
            img: imgValue(),
            nome: req.body.nome,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
            senha: hashedpassword,
        });
        const telefoneExist = await cliente_1.Cliente.findOne({
            telefone: req.body.telefone,
        });
        if (telefoneExist) {
            res.json({ message: "Número do telefone já existe" });
        }
        else {
            try {
                const savedCliente = await clienteObj.save();
                res.json({ cliente: savedCliente });
            }
            catch (error) {
                res.json({ message: error });
            }
        }
    }
});
clientRoutes.delete("/delete", async (req, res) => {
    const id = req.body.id;
    try {
        const removedCliente = await cliente_1.Cliente.findOneAndRemove({ _id: id });
        res.json(removedCliente);
    }
    catch (error) {
        res.json(error);
    }
});
clientRoutes.post("/getOne", async (req, res) => {
    const id = req.body.id;
    if (id) {
        try {
            const clienteEnc = await cliente_1.Cliente.findOne({ _id: id });
            if (clienteEnc) {
                res.json(clienteEnc);
            }
            else {
                res.json({ message: "Utilizador não encontrado" });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        res.json({ message: "id vazio" });
    }
});
clientRoutes.patch("/update", async (req, res) => {
    const { error } = (0, validationCliente_1.validationUpdate)(req.body);
    if (error) {
        res.json({ message: error.details[0].message });
    }
    else {
        const user = {
            id: req.body.id,
            senha: req.body.senha,
        };
        const userobj = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
        };
        const userExist = await cliente_1.Cliente.findOne({ _id: user.id });
        if (userExist) {
            const validaUser = await bcrypt.compare(user.senha, userExist.senha);
            if (validaUser) {
                const updatedUser = await cliente_1.Cliente.findOneAndUpdate({ _id: userExist.id }, {
                    nome: userobj.nome,
                    telefone: userobj.telefone,
                    endereco: userobj.endereco,
                });
                res.json(updatedUser);
            }
            else {
                res.json({ message: "Não tem permissão para actualizar os dados" });
            }
        }
        else {
            res.json({ message: "Utilizador não existe" });
        }
    }
});
clientRoutes.post("/login", async (req, res) => {
    const { error } = (0, validationCliente_1.validationLogin)(req.body);
    if (error) {
        res.json({ message: error.details[0].message });
    }
    else {
        const cliente = {
            telefone: req.body.telefone,
            senha: req.body.senha,
        };
        try {
            const clienteEnc = await cliente_1.Cliente.findOne({ telefone: cliente.telefone });
            if (clienteEnc) {
                const validUser = await bcrypt.compare(cliente.senha, clienteEnc.senha);
                if (validUser) {
                    res.json({ cliente: clienteEnc });
                }
                else {
                    res.json({ message: "Utilizador não encontrado" });
                }
            }
            else {
                res.json({ message: "Utilizador não encontrado" });
            }
        }
        catch (error) {
            res.json({ message: error });
        }
    }
});
clientRoutes.post("/uploadPhoto/:userid", async (req, res) => {
    try {
        const storage = multer_1.default.diskStorage({
            destination: "../cliente/public/img/avatar",
            filename: (req, file, cb) => {
                cb(null, req.params.userid + path_1.default.extname(file.originalname));
                try {
                    const updatedCliente = cliente_1.Cliente.findOneAndUpdate({ _id: req.params.userid }, { img: req.params.userid + path_1.default.extname(file.originalname) });
                    console.log(req.params.userid + path_1.default.extname(file.originalname));
                }
                catch (err) {
                    console.log(err);
                }
            },
        });
        const upload = (0, multer_1.default)({
            storage: storage,
            limits: { fileSize: 1000000 },
        }).single("myimage");
        upload(req, res, (err) => {
            console.log({ file: req.body });
            res.json({ file: req.body });
        });
    }
    catch (error) {
        console.log(error);
    }
});
