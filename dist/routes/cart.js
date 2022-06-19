"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = require("express");
const cart_1 = require("../models/cart");
const customer_1 = require("../models/customer");
const product_1 = require("../models/product");
const cartRoutes = (0, express_1.Router)();
exports.cartRoutes = cartRoutes;
cartRoutes.get("/getCarts", async (req, res) => {
    try {
        const cart = await cart_1.Cart.find({
            $or: [{ status: "Entregada" }, { status: "Cancelada" }],
        });
        res.json({ cart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/getCartsToday", async (req, res) => {
    try {
        const cart = await cart_1.Cart.find();
        res.json({ cart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/getCartsOn", async (req, res) => {
    try {
        const cart = await cart_1.Cart.find({ closed: true });
        res.json({ cart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/getCartsPd", async (req, res) => {
    try {
        const cart = await cart_1.Cart.find({ closed: true, status: "Pendente" });
        res.json({ cart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/getCartsEntr", async (req, res) => {
    try {
        const cart = await cart_1.Cart.find({ closed: true, status: "Entregada" });
        res.json({ cart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/getCartsAC", async (req, res) => {
    try {
        const cart = await cart_1.Cart.find({ closed: true, status: "A caminho..." });
        res.json({ cart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.post("/postCart", async (req, res) => {
    try {
        const CustomerExist = await customer_1.Customer.findOne({ _id: req.body.userid });
        const productExist = await product_1.Product.findOne({
            _id: req.body.producto.product.id,
        });
        if (CustomerExist && productExist) {
            const cartExist = await cart_1.Cart.findOne({
                userid: req.body.userid,
                status: "Pendente",
            });
            if (cartExist) {
                console.log(cartExist);
                if (cartExist.closed) {
                    res.json({ closed: true });
                }
                else {
                    var productos = await cartExist.producto;
                    if (productos) {
                        productos.push(req.body.producto);
                        const updatedCart = await cart_1.Cart.findOneAndUpdate({ _id: cartExist._id, status: "Pendente" }, { producto: productos });
                        res.json({ cart: updatedCart });
                    }
                    else {
                        const updatedCart = await cart_1.Cart.findOneAndUpdate({ _id: cartExist._id, status: "Pendente" }, { producto: req.body.producto });
                        res.json({ cart: updatedCart });
                    }
                }
            }
            else {
                const userObj = await customer_1.Customer.findOne({ _id: req.body.userid });
                const cart = new cart_1.Cart({
                    userid: req.body.userid,
                    producto: req.body.producto,
                    endereco: req.body.endereco
                        ? req.body.endereco
                        : CustomerExist.endereco,
                    userObj: userObj,
                    data_car: req.body.data_car,
                });
                try {
                    const cartSaved = await cart.save();
                    console.log(userObj);
                    res.json({ cart: cartSaved });
                }
                catch (error) {
                    res.json({ message: error });
                }
            }
        }
        else {
            res.json({ message: "Dados enviados desconhecidos" });
        }
    }
    catch (error) {
        res.json({ message: error.message });
    }
});
cartRoutes.post("/deleteproduct/:id", async (req, res) => {
    try {
        const producto = req.body.producto;
        if (producto.length === 0) {
            const deletedCart = await cart_1.Cart.findOneAndDelete({ _id: req.params.id });
            res.json({ cart: deletedCart });
        }
        else {
            const cart = await cart_1.Cart.findOneAndUpdate({ _id: req.params.id }, { producto: producto });
            res.json({ cart: cart });
        }
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/getCart/:userid", async (req, res) => {
    try {
        const cart = await cart_1.Cart.findOne({
            userid: req.params.userid,
            status: "Pendente",
        });
        res.json({ cart: cart });
    }
    catch (error) {
        res.json({ message: error });
    }
});
cartRoutes.post("/closeCart/:id", async (req, res) => {
    var preco_total = req.body.preco_total;
    var date = req.body.date;
    var qtd_total = req.body.quantidade_total;
    try {
        const cart = await cart_1.Cart.findOneAndUpdate({ _id: req.params.id }, {
            closed: true,
            preco_total: preco_total,
            data_car: date,
            quantidade_total: qtd_total,
        });
        res.json({ cart: cart });
    }
    catch (error) {
        res.json({ message: error });
    }
});
cartRoutes.post("/deliveryCart/:id", (req, res) => {
    var id = req.params.id;
    try {
        const cartdelivered = cart_1.Cart.findOneAndUpdate({ _id: id }, { entregado: true });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.post("/openCart/:id", async (req, res) => {
    var id = req.params.id;
    try {
        const cartOpened = await cart_1.Cart.findOneAndUpdate({ _id: id }, { closed: false });
        res.json({ cartOpened });
    }
    catch (err) {
        console.log(err);
    }
});
cartRoutes.post("/confirmCart/:id", async (req, res) => {
    var id = req.params.id;
    try {
        const confirmedCart = await cart_1.Cart.findOneAndUpdate({ _id: id }, { status: "A caminho..." });
        res.json({ confirmedCart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.post("/Cancel/:id", async (req, res) => {
    var id = req.params.id;
    try {
        const confirmedCart = await cart_1.Cart.findOneAndUpdate({ _id: id }, { status: "Cancelada" });
        res.json({ confirmedCart });
    }
    catch (error) {
        console.log(error);
    }
});
cartRoutes.get("/Entregado/:id", async (req, res) => {
    var id = req.params.id;
    try {
        const confirmedCart = await cart_1.Cart.findOneAndUpdate({ _id: id }, { status: "Entregada" });
        res.json({ confirmedCart });
    }
    catch (error) {
        console.log(error);
    }
});
