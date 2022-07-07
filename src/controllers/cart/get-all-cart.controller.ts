import { Cart as CartEntity } from './../../Entities/cart'

import { BaseController } from '../../typescript/controller'
import { Service } from '../../typescript/service'

export class GetAllCartController implements BaseController<CartEntity[]> {
  handler(service: Service<CartEntity[]>) {
    return async (): Promise<CartEntity[]> => {
      return await service.execute()
    }
  }
}
