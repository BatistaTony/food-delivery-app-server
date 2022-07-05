"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCartController = void 0;
const delete_cart_controller_1 = require("../../../controllers/cart/delete-cart.controller");
const delete_cart_service_1 = require("../../../services/cart/delete-cart.service");
const makeDeleteCartController = () => async (req, res) => {
    const endpoint = new delete_cart_controller_1.DeleteCartController().handler(new delete_cart_service_1.DeleteCartService());
    try {
        const result = await endpoint(req);
        res.json({
            status: 200,
            msg: 'cart deleted successfuly',
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: 500,
            msg: 'Something went wrong',
            data: error,
        });
    }
};
exports.makeDeleteCartController = makeDeleteCartController;
