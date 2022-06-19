"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_1 = require("../models/product");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
productRoutes.get("/getAll", async (req, res) => {
    console.log("working");
    try {
        const products = await product_1.Product.find();
        res.json({ products: products });
    }
    catch (err) {
        res.json({ message: err });
    }
});
productRoutes.get("/getOne/:id", async (req, res) => {
    var product_id = req.params.id;
    if (product_id) {
        try {
            const product = await product_1.Product.findOne({ _id: product_id });
            res.json({ product: product });
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    else {
        res.json({ message: "Id do producto ?" });
    }
});
productRoutes.post("/create", async (req, res) => {
    const product = await prisma.product.create({
        data: {
            cover: "dsjghjksdkjgs",
            description: "Some delicious food",
            id: "54387453hjgjhfe",
            name: "caldeirada",
            price: "343",
        },
    });
    console.log(product);
    res.json(product);
});
productRoutes.delete("/delete/:id", async (req, res) => {
    const product_id = req.params.id;
    if (product_id) {
        try {
            const productDeleted = await product_1.Product.findOneAndDelete({
                _id: product_id,
            });
            res.json(productDeleted);
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
    var product_id = await req.body.id;
    const productObj = new product_1.Product({
        nome: req.body.nome,
        sabores: req.body.sabores,
        tamanho: req.body.tamanho,
    });
    if (product_id) {
        const productUpdated = await product_1.Product.findOneAndUpdate({ _id: product_id }, {
            nome: productObj.nome,
            sabores: productObj.sabores,
            tamanho: productObj.tamanho,
        });
        if (productUpdated) {
            res.json({ message: "product actualizado com sucesso" });
        }
        else {
            res.json({ message: "Erro ao actualizar a product" });
        }
    }
    else {
        res.json({ message: "id producto" });
    }
});
