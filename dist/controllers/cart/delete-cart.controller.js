"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCartController = void 0;
class DeleteCartController {
    handler(service) {
        return async (req) => {
            return service.execute(req.params.id);
        };
    }
}
exports.DeleteCartController = DeleteCartController;
