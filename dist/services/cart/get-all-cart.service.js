"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCartService = void 0;
const service_1 = require("../../typescript/service");
class GetAllCartService extends service_1.BaseService {
    async execute() {
        const allCarts = await this.prisma.cart.findMany({
            include: {
                products: true,
                customer: {
                    select: {
                        address: true,
                        name: true,
                        phone: true,
                    },
                },
            },
        });
        return allCarts;
    }
}
exports.GetAllCartService = GetAllCartService;
