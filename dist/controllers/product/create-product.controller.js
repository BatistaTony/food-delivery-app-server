"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
class CreateProductController {
    handler(service) {
        return async (req) => {
            const productSaved = await service.execute(req.body);
            return productSaved;
        };
    }
}
exports.CreateProductController = CreateProductController;
