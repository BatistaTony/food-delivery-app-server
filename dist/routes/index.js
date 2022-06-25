"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAppRoutes = void 0;
const cart_1 = require("./cart");
const customer_1 = require("./customer");
const product_1 = require("./product");
const user_1 = require("./user");
const makeAppRoutes = (app) => {
    app.use('/user', user_1.userRoutes);
    app.use('/product', product_1.productRoutes);
    app.use('/cart', cart_1.cartRoutes);
    app.use('/customer', customer_1.customerRoutes);
};
exports.makeAppRoutes = makeAppRoutes;
