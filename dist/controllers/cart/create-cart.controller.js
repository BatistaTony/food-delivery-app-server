"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartController = void 0;
class CreateCartController {
    handler(service) {
        return async (req) => {
            return await service.execute(req.body);
        };
    }
}
exports.CreateCartController = CreateCartController;
