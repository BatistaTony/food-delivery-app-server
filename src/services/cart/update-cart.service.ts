import { CartStatus } from '@prisma/client'
import { Cart } from '../../Entities/cart'
import { Product } from '../../Entities/product'
import { BaseService } from '../../typescript/service'

export class UpdateCartService extends BaseService {
  async updateProductAtCart(product: Product) {
    const updatedProducts = await this.prisma.cartProduct.update({
      data: {
        quantity: product.quantity as number,
      },
      where: {
        productId: product.id,
      },
    })

    return updatedProducts
  }

  async execute(cart: Cart): Promise<Cart> {
    if (cart.products.length) {
      await Promise.all(
        cart.products.map(async (prod) => {
          return await this.updateProductAtCart(prod)
        }),
      )
    }

    const newCart = await this.prisma.cart.update({
      data: {
        status: cart.status as CartStatus,
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
    })

    return newCart as unknown as Cart
  }
}
