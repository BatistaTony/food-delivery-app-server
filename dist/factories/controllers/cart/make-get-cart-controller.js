"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetCartController = void 0;
const get_cart_controller_1 = require("../../../controllers/cart/get-cart.controller");
const get_cart_service_1 = require("../../../services/cart/get-cart.service");
const makeGetCartController = () => async (req, res) => {
    const endpoint = new get_cart_controller_1.GetCartController().handler(new get_cart_service_1.GetCartService());
    try {
        const resp = await endpoint(req);
        res.json({
            status: 200,
            msg: '',
            data: resp,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            status: 500,
            msg: 'Something went wrong',
            data: error,
        });
    }
};
exports.makeGetCartController = makeGetCartController;
