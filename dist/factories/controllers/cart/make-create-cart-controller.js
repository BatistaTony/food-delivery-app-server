"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCartController = void 0;
const create_cart_controller_1 = require("../../../controllers/cart/create-cart.controller");
const create_cart_service_1 = require("../../../services/cart/create-cart.service");
const makeCreateCartController = () => async (req, res) => {
    const endpoint = new create_cart_controller_1.CreateCartController().handler(new create_cart_service_1.CreateCartService());
    try {
        const result = await endpoint(req);
        return res.json({
            status: 200,
            msg: 'cart created sucessfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            status: 500,
            msg: 'Something went wrong',
            data: error,
        });
    }
};
exports.makeCreateCartController = makeCreateCartController;
