"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartService = void 0;
const uid_1 = require("uid");
const service_1 = require("../../typescript/service");
// connectOrCreate: {
//   create: {
//     id: cart.customer.id,
//     address: cart.customer.address,
//     name: cart.customer.name,
//     password: cart.customer.password,
//     phone: cart.customer.phone,
//   },
//   where: {
//     id: cart.customer.id,
//   },
// },
class CreateCartService extends service_1.BaseService {
    createManyProductForCart(products, cartId) {
        return {
            createMany: {
                data: products.map((prod) => ({
                    productId: prod.id,
                    quantity: prod.quantity,
                })),
                skipDuplicates: true,
            },
        };
    }
    async execute(cart) {
        const cartId = (0, uid_1.uid)(16);
        const cartRes = await this.prisma.cart.create({
            data: {
                id: cartId,
                status: 'Pending',
                customer: {
                    connect: {
                        id: cart.customer.id,
                    },
                },
                products: this.createManyProductForCart(cart.products, cartId),
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
