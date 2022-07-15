import { Response, Request } from 'express'
import { GetCartController } from '../../../controllers/cart/get-cart.controller'
import { GetCartService } from '../../../services/cart/get-cart.service'

export const makeGetCartController =
  () => async (req: Request, res: Response) => {
    const endpoint = new GetCartController().handler(new GetCartService())

    try {
      const resp = await endpoint(req)
      res.json({
        status: 200,
        msg: '',
        data: resp,
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: 500,
        msg: 'Something went wrong',
        data: error,
      })
    }
  }
