"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductService = void 0;
const service_1 = require("../../typescript/service");
class DeleteProductService extends service_1.BaseService {
    async execute(id) {
        const productExists = await this.prisma.product.findFirst({ where: {
                id
            } });
        if (productExists?.id) {
            const productDeleted = await this.prisma.product.delete({ where: {
                    id
                } });
            return productDeleted;
        }
        else {
            return null;
        }
    }
}
exports.DeleteProductService = DeleteProductService;
