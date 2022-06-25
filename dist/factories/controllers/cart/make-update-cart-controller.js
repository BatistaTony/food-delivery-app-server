"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCartController = void 0;
const update_cart_controller_1 = require("../../../controllers/cart/update-cart.controller");
const update_cart_service_1 = require("../../../services/cart/update-cart.service");
const makeUpdateCartController = () => async (req, res) => {
    const endpoint = new update_cart_controller_1.UpdateCartController().handler(new update_cart_service_1.UpdateCartService());
    try {
        const result = await endpoint(req);
        res.json({ status: 500, msg: 'Something went wrong', data: result });
    }
    catch (error) {
        res.json({
            status: 500,
            msg: 'Something went wrong',
            data: error,
        });
    }
};
exports.makeUpdateCartController = makeUpdateCartController;
