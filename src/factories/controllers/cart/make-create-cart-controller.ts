import { Request, Response } from 'express'
import { CreateCartController } from '../../../controllers/cart/create-cart.controller'
import { CreateCartService } from '../../../services/cart/create-cart.service'

export const makeCreateCartController =
  () => async (req: Request, res: Response) => {
    const endpoint = new CreateCartController().handler(new CreateCartService())
    try {
      const result = await endpoint(req)
      return res.json({
        status: 200,
        msg: 'cart created sucessfully',
        data: result,
      })
    } catch (error) {
      console.log(error)
      return res.json({
        status: 500,
        msg: 'Something went wrong',
        data: error,
      })
    }
  }
