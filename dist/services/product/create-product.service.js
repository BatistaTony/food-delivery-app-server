"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const uid_1 = require("uid");
const service_1 = require("../../typescript/service");
class CreateProductService extends service_1.BaseService {
    async execute(data) {
        const product = await this.prisma.product.create({
            data: {
                id: (0, uid_1.uid)(16),
                cover: data.cover,
                description: data.description,
                name: data.name,
                price: data.price,
            },
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
