"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartService = void 0;
const uid_1 = require("uid");
const service_1 = require("../../typescript/service");
class CreateCartService extends service_1.BaseService {
    createManyProductForCart(products) {
        return {
            createMany: {
                data: products.map((prod) => ({
                    id: (0, uid_1.uid)(),
                    productId: prod.id,
                    quantity: prod.quantity,
                })),
                skipDuplicates: true,
            },
        };
    }
    async execute(cart) {
        const cartRes = await this.prisma.cart.create({
            data: {
                id: (0, uid_1.uid)(16),
                status: 'Pending',
                customer: {
                    connect: {
                        id: cart.customer.id,
                    },
                },
                products: this.createManyProductForCart(cart.products),
            },
            include: {
                customer: {
                    select: {
                        phone: true,
                        address: true,
                        id: true,
                        name: true,
                    },
                },
                products: true,
            },
        });
        return cartRes;
    }
}
exports.CreateCartService = CreateCartService;
