import { Request } from 'express'
import { BaseController } from '../../typescript/controller'
import { Service } from '../../typescript/service'

export class DeleteCartController implements BaseController<Boolean> {
  handler(service: Service<Boolean>) {
    return async (req: Request) => {
      return service.execute(req.params.id)
    }
  }
}
