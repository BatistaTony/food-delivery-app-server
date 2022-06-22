"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductController = void 0;
class UpdateProductController {
    handler(service) {
        return async (req) => {
            return await service.execute(req.body);
        };
    }
}
exports.UpdateProductController = UpdateProductController;
