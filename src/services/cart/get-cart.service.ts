import { Cart } from '../../Entities/cart'
import { BaseService } from '../../typescript/service'

export class GetCartService extends BaseService {
  async execute(customerId: string): Promise<Cart | null> {
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
    })
    if (cart) {
      return cart as unknown as Cart
    } else {
      return null
    }
  }
}
