"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartService = void 0;
const service_1 = require("../../typescript/service");
class GetCartService extends service_1.BaseService {
    async execute(customerId) {
        if (customerId) {
            const cart = await this.prisma.cart.findFirst({
                where: {
                    customerId,
                },
                include: {
                    customer: {
                        select: {
                            address: true,
                            name: true,
                            phone: true,
                            id: true,
                        },
                    },
                    products: true,
                },
            });
            if (cart) {
                return cart;
            }
            else {
                return null;
            }
        }
        else {
            return { msg: 'customer id is missing' };
        }
    }
}
exports.GetCartService = GetCartService;
