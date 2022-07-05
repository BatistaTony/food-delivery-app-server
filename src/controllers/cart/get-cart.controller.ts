import { Cart as CartEntity } from './../../Entities/cart'
import { BaseController } from '../../typescript/controller'
import { Service } from '../../typescript/service'
import { Request } from 'express'

export class GetCartController implements BaseController<CartEntity | null> {
  handler(service: Service<CartEntity | null>) {
    return async (req: Request): Promise<CartEntity | null> => {
      return await service.execute(req.body.customerId)
    }
  }
}
