import { Product } from '../../Entities/product'
import { BaseService } from '../../typescript/service'

export class GetAllProductService extends BaseService {
  async execute(): Promise<Product[]> {
    const products = await this.prisma.product.findMany()
    return products
  }
}
