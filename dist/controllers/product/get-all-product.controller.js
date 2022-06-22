"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductController = void 0;
class GetAllProductController {
    handler(service) {
        return async () => {
            return await service.execute();
        };
    }
}
exports.GetAllProductController = GetAllProductController;
