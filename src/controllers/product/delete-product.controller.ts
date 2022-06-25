import { Request } from 'express'
import { Product as ProductEntity } from '../../Entities/product'
import { BaseController } from '../../typescript/controller'
import { Service } from '../../typescript/service'

export class DeleteProductController implements BaseController<ProductEntity> {
  handler(service: Service<ProductEntity | null>) {
    return async (req: Request) => {
      return await service.execute(req.params.id)
    }
  }
}
