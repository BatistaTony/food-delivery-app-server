"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateProductController = void 0;
const create_product_controller_1 = require("../../../controllers/product/create-product.controller");
const create_product_service_1 = require("../../../services/product/create-product.service");
const makeCreateProductController = () => async (req, res) => {
    const endpoint = new create_product_controller_1.CreateProductController().handler(new create_product_service_1.CreateProductService());
    try {
        const resp = await endpoint(req);
        return res.json({
            status: 200,
            msg: 'created successfuly',
            data: resp,
        });
    }
    catch (error) {
        return res.json({
            status: 500,
            msg: 'something went wrong',
        });
    }
};
exports.makeCreateProductController = makeCreateProductController;
