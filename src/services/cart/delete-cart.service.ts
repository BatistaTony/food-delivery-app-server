import { Product } from '../../Entities/product'
import { BaseService } from '../../typescript/service'

export class DeleteCartService extends BaseService {
  async deleteProductFromCart(id: string) {
    const prod = await this.prisma.cartProduct.delete({
      where: {
        productId: id,
      },
    })

    return prod
  }

  async execute(id: string): Promise<boolean> {
    const deletedCart = await this.prisma.cart.delete({
      where: {
        id,
      },
      include: {
        products: true,
      },
    })

    const producsDeleted = await Promise.all(
      deletedCart.products.map(async (prod) => {
        return await this.deleteProductFromCart(prod.productId)
      }),
    )

    console.log(producsDeleted)

    const result = !!deletedCart && !!producsDeleted

    return result
  }
}
