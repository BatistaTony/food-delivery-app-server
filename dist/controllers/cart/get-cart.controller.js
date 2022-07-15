"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartController = void 0;
class GetCartController {
    handler(service) {
        return async (req) => {
            return await service.execute({
                customerId: req.body.customerId,
                status: req.body.status,
            });
        };
    }
}
exports.GetCartController = GetCartController;
