"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const pizza_1 = require("../models/pizza");
const productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
productRoutes.get("/getAll", async (req, res) => {
    console.log("working");
    try {
        const pizzas = await pizza_1.Pizza.find();
        res.json({ pizzas: pizzas });
    }
    catch (err) {
        res.json({ message: err });
    }
});
productRoutes.get("/getOne/:id", async (req, res) => {
    var pizza_id = req.params.id;
    if (pizza_id) {
        try {
            const pizza = await pizza_1.Pizza.findOne({ _id: pizza_id });
            res.json({ pizza: pizza });
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    else {
        res.json({ message: "Id do producto ?" });
    }
});
productRoutes.post("/register", async (req, res) => {
    const pizzaExist = await pizza_1.Pizza.findOne({ nome: req.body.nome });
    if (!pizzaExist) {
        const pizzaObj = new pizza_1.Pizza({
            nome: req.body.nome,
            sabores: req.body.sabores,
            tamanho: req.body.tamanho,
        });
        try {
            const pizzasaved = await pizzaObj.save();
            res.json({ pizza: "ADICIONADA COM SUCESSO" });
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    else {
        res.json({ message: "NOME DA PIZZA JÁ EXISTE" });
    }
});
productRoutes.delete("/delete/:id", async (req, res) => {
    const pizza_id = req.params.id;
    if (pizza_id) {
        try {
            const pizzaDeleted = await pizza_1.Pizza.findOneAndDelete({ _id: pizza_id });
            res.json(pizzaDeleted);
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    else {
        res.json({ message: "Id do producto ?" });
    }
});
productRoutes.post("/update", async (req, res) => {
    var pizza_id = await req.body.id;
    const pizzaObj = new pizza_1.Pizza({
        nome: req.body.nome,
        sabores: req.body.sabores,
        tamanho: req.body.tamanho,
    });
    if (pizza_id) {
        const pizzaUpdated = await pizza_1.Pizza.findOneAndUpdate({ _id: pizza_id }, {
            nome: pizzaObj.nome,
            sabores: pizzaObj.sabores,
            tamanho: pizzaObj.tamanho,
        });
        if (pizzaUpdated) {
            res.json({ message: "Pizza actualizado com sucesso" });
        }
        else {
            res.json({ message: "Erro ao actualizar a pizza" });
        }
    }
    else {
        res.json({ message: "id producto" });
    }
});
