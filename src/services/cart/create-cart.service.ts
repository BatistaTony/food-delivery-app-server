import { uid } from 'uid'
import { Cart } from '../../Entities/cart'
import { Product } from '../../Entities/product'
import { BaseService } from '../../typescript/service'

export class CreateCartService extends BaseService {
  createManyProductForCart(products: Product[]) {
    return {
      createMany: {
        data: products.map((prod) => ({
          id: uid(),
          productId: prod.id,
          quantity: prod.quantity as any,
        })),
        skipDuplicates: true,
      },
    }
  }

  async execute(cart: Cart): Promise<Cart> {
    const cartRes = await this.prisma.cart.create({
      data: {
        id: uid(16),
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
    })

    return cartRes as any
  }
}
