"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const make_create_product_controller_1 = require("../factories/controllers/make-create-product-controller");
const productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
productRoutes.get("/getAll", async (req, res) => {
    console.log("working");
    // try {
    //   const products = await Product.find();
    //   res.json({ products: products });
    // } catch (err) {
    //   res.json({ message: err });
    // }
});
productRoutes.get("/getOne/:id", async (req, res) => {
    // const product_id = req.params.id;
    // if (product_id) {
    //   try {
    //     const product = await Product.findOne({ _id: product_id });
    //     res.json({ product });
    //   } catch (error) {
    //     res.json({ message: error });
    //   }
    // } else {
    //   res.json({ message: "Id do producto ?" });
    // }
});
productRoutes.post("/create", (0, make_create_product_controller_1.makeCreateProductController)());
productRoutes.delete("/delete/:id", async (req, res) => {
    // const product_id = req.params.id;
    // if (product_id) {
    //   try {
    //     const productDeleted = await Product.findOneAndDelete({
    //       _id: product_id,
    //     });
    //     res.json(productDeleted);
    //   } catch (error) {
    //     res.json({ message: error });
    //   }
    // } else {
    //   res.json({ message: "Id do producto ?" });
    // }
});
productRoutes.post("/update", async (req, res) => {
    // const product_id = await req.body.id;
    // const productObj = new Product({
    //   nome: req.body.nome,
    //   sabores: req.body.sabores,
    //   tamanho: req.body.tamanho,
    // });
    // if (product_id) {
    //   const productUpdated = await Product.findOneAndUpdate(
    //     { _id: product_id },
    //     {
    //       nome: productObj.nome,
    //       sabores: productObj.sabores,
    //       tamanho: productObj.tamanho,
    //     }
    //   );
    //   if (productUpdated) {
    //     res.json({ message: "product actualizado com sucesso" });
    //   } else {
    //     res.json({ message: "Erro ao actualizar a product" });
    //   }
    // } else {
    //   res.json({ message: "id producto" });
    // }
});
