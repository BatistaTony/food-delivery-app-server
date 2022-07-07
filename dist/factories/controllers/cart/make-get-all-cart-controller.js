"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllCartController = void 0;
const get_all_cart_controller_1 = require("../../../controllers/cart/get-all-cart.controller");
const get_all_cart_service_1 = require("../../../services/cart/get-all-cart.service");
const makeGetAllCartController = () => async (req, res) => {
    const endpoint = new get_all_cart_controller_1.GetAllCartController().handler(new get_all_cart_service_1.GetAllCartService());
    try {
        const result = await endpoint();
        res.json({ status: 200, msg: 'updated successfuly', data: result });
    }
    catch (error) {
        res.json({
            status: 500,
            msg: 'Something went wrong',
            data: JSON.stringify(error),
        });
    }
};
exports.makeGetAllCartController = makeGetAllCartController;
