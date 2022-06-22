"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductController = void 0;
class DeleteProductController {
    handler(service) {
        return async (req) => {
            return await service.execute(req.params.id);
        };
    }
}
exports.DeleteProductController = DeleteProductController;
