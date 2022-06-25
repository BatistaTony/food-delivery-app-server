"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_cart_controller_1 = require("../../../controllers/cart/create-cart.controller");
const create_cart_service_1 = require("../../../services/cart/create-cart.service");
const makeCreateCartController = () => (req, res) => {
    const endpoint = new create_cart_controller_1.CreateCartController().handler(new create_cart_service_1.CreateCartService(req));
};
