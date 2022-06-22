"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteProductController = void 0;
const delete_product_controller_1 = require("../../controllers/product/delete-product.controller");
const delete_product_service_1 = require("../../services/product/delete-product.service");
const makeDeleteProductController = () => async (req, res) => {
    const endpoint = new delete_product_controller_1.DeleteProductController().handler(new delete_product_service_1.DeleteProductService());
    try {
        const resp = await endpoint(req);
        return res.json({
            status: resp ? 200 : 404,
            msg: resp ? "product deleted sucessfully" : "product not found",
            product: resp
        });
    }
    catch (error) {
        return res.json({
            status: 500,
            msg: "something went wrong",
            product: null
        });
    }
};
exports.makeDeleteProductController = makeDeleteProductController;
