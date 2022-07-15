import { CartStatus } from '@prisma/client'
import { Cart } from '../../Entities/cart'
import { BaseService } from '../../typescript/service'

interface Props {
  customerId: string
  status: CartStatus | undefined
}

export class GetCartService extends BaseService {
  async execute({ customerId, status }: Props): Promise<Cart[] | null> {
    if (customerId) {
      const cart = await this.prisma.cart.findMany({
        where: {
          customerId,
          status,
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
        return cart as unknown as Cart[]
      } else {
        return null
      }
    } else {
      return { msg: 'customer id is missing' } as unknown as any
    }
  }
}
