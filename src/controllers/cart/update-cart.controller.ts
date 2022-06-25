import { Request } from 'express'
import { Cart as CartEntity } from '../../Entities/cart'
import { BaseController } from '../../typescript/controller'
import { Service } from '../../typescript/service'

export class UpdateCartController implements BaseController<CartEntity> {
  handler(service: Service<CartEntity>) {
    return async (req: Request) => {
      return await service.execute(req.body)
    }
  }
}
