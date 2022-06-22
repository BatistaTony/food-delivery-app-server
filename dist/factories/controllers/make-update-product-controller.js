"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateProductController = void 0;
const update_product_controller_1 = require("../../controllers/product/update-product.controller");
const update_product_service_1 = require("../../services/product/update-product.service");
const makeUpdateProductController = () => async (req, res) => {
    const endpoint = new update_product_controller_1.UpdateProductController().handler(new update_product_service_1.UpdateProductService());
    try {
        const resp = await endpoint(req);
        res.json({
            status: 200,
            msg: "product updated successfully",
            product: resp
        });
    }
    catch (error) {
        res.json({
            status: 500,
            msg: "Something went wrong",
            product: null
        });
    }
};
exports.makeUpdateProductController = makeUpdateProductController;
