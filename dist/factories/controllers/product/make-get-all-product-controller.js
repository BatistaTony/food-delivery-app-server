"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllProductController = void 0;
const get_all_product_controller_1 = require("../../../controllers/product/get-all-product.controller");
const get_all_product_service_1 = require("../../../services/product/get-all-product.service");
const makeGetAllProductController = () => async (_, res) => {
    const endpoint = new get_all_product_controller_1.GetAllProductController().handler(new get_all_product_service_1.GetAllProductService());
    try {
        const resp = await endpoint();
        res.json({
            status: 200,
            products: resp,
        });
    }
    catch (error) {
        res.json({
            status: 500,
            msg: 'Something went wrong',
            product: null,
        });
    }
};
exports.makeGetAllProductController = makeGetAllProductController;
