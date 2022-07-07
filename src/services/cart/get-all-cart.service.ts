import { Cart } from '../../Entities/cart'
import { BaseService } from '../../typescript/service'

export class GetAllCartService extends BaseService {
  async execute(): Promise<Cart[]> {
    const allCarts = await this.prisma.cart.findMany({
      include: {
        products: true,
        customer: {
          select: {
            address: true,
            name: true,
            phone: true,
          },
        },
      },
    })

    return allCarts as unknown as Cart[]
  }
}
