"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartController = void 0;
class UpdateCartController {
    handler(service) {
        return async (req) => {
            return await service.execute(req.body);
        };
    }
}
exports.UpdateCartController = UpdateCartController;
