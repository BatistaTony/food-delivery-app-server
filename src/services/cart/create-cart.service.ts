import { uid } from 'uid'
import { Cart } from '../../Entities/cart'
import { Product } from '../../Entities/product'
import { BaseService } from '../../typescript/service'

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

export class CreateCartService extends BaseService {
  createManyProductForCart(products: Product[], cartId: string) {
    return {
      createMany: {
        data: products.map((prod) => ({
          productId: prod.id,
          quantity: prod.quantity as any,
        })),
        skipDuplicates: true,
      },
    }
  }

  async execute(cart: Cart): Promise<Cart> {
    const cartId = uid(16)
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
    })

    return cartRes as unknown as Cart
  }
}
