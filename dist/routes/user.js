"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_1 = require("./../models/user");
const validationschema_1 = require("./validationschema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/admin/register", async (req, res) => {
    const { error } = (0, validationschema_1.registerValidation)(req.body);
    if (error) {
        res.json({ error: error.details[0].message });
    }
    else {
        const emailExist = await user_1.User.findOne({ email: req.body.email });
        if (emailExist) {
            res.json({ message: "Email ja existe" });
        }
        else {
            const salt = await bcryptjs_1.default.genSalt(10);
            const hashedsenha = await bcryptjs_1.default.hash(req.body.senha, salt);
            const user = new user_1.User({
                nome: req.body.nome,
                email: req.body.email,
                senha: hashedsenha,
            });
            const usersaved = await user.save();
            res.json({ id: usersaved._id });
        }
    }
});
userRoutes.post("/admin/login", async (req, res) => {
    const { error } = (0, validationschema_1.loginValidation)(req.body);
    if (error) {
        res.json({ error: error.details[0].message });
    }
    else {
        const emailExist = await user_1.User.findOne({ email: req.body.email });
        if (emailExist) {
            const isValid = await bcryptjs_1.default.compare(req.body.senha, emailExist.senha);
            if (isValid) {
                res.json({ id: emailExist._id });
            }
            else {
                res.json({ message: "Usuario não existe" });
            }
        }
        else {
            res.json({ message: "Usuario não existe" });
        }
    }
});
