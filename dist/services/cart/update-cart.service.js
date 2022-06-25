"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartService = void 0;
const service_1 = require("../../typescript/service");
class UpdateCartService extends service_1.BaseService {
    async updateProductAtCart(product) {
        const updatedProducts = await this.prisma.cartProduct.update({
            data: {
                quantity: product.quantity,
            },
            where: {
                id: product.id,
            },
        });
        return updatedProducts;
    }
    async execute(cart) {
        if (cart.products.length) {
            await Promise.all(cart.products.map(async (prod) => {
                return await this.updateProductAtCart(prod);
            }));
        }
        const newCart = await this.prisma.cart.update({
            data: {
                customer: {
                    connect: {
                        id: cart.customer.id,
                    },
                },
                status: cart.status,
            },
            where: {
                id: cart.id,
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
        return newCart;
    }
}
exports.UpdateCartService = UpdateCartService;
