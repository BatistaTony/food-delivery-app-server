import { Product } from '../../Entities/product'
import { BaseService } from '../../typescript/service'

export class UpdateProductService extends BaseService {
  async execute(data: Product): Promise<Product | null> {
    const productUpdated = await this.prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    })

    return productUpdated
  }
}
