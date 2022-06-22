"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductService = void 0;
const service_1 = require("../../typescript/service");
class UpdateProductService extends service_1.BaseService {
    async execute(data) {
        const productUpdated = await this.prisma.product.update({ where: {
                id: data.id
            }, data: {
                ...data
            } });
        return productUpdated;
    }
}
exports.UpdateProductService = UpdateProductService;
