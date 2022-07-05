"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCartService = void 0;
const service_1 = require("../../typescript/service");
class DeleteCartService extends service_1.BaseService {
    async deleteProductFromCart(id) {
        const prod = await this.prisma.cartProduct.delete({
            where: {
                productId: id,
            },
        });
        return prod;
    }
    async execute(id) {
        const deletedCart = await this.prisma.cart.delete({
            where: {
                id,
            },
            include: {
                products: true,
            },
        });
        const producsDeleted = await Promise.all(deletedCart.products.map(async (prod) => {
            return await this.deleteProductFromCart(prod.productId);
        }));
        console.log(producsDeleted);
        const result = !!deletedCart && !!producsDeleted;
        return result;
    }
}
exports.DeleteCartService = DeleteCartService;
