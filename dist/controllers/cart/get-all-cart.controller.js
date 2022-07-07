"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCartController = void 0;
class GetAllCartController {
    handler(service) {
        return async () => {
            return await service.execute();
        };
    }
}
exports.GetAllCartController = GetAllCartController;
