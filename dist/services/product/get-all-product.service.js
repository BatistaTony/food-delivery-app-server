"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductService = void 0;
const service_1 = require("../../typescript/service");
class GetAllProductService extends service_1.BaseService {
    async execute() {
        const products = await this.prisma.product.findMany();
        return products;
    }
}
exports.GetAllProductService = GetAllProductService;
