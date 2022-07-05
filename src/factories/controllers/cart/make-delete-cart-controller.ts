import { Request, Response } from 'express'
import { DeleteCartController } from '../../../controllers/cart/delete-cart.controller'
import { DeleteCartService } from '../../../services/cart/delete-cart.service'

export const makeDeleteCartController =
  () => async (req: Request, res: Response) => {
    const endpoint = new DeleteCartController().handler(new DeleteCartService())

    try {
      const result = await endpoint(req)
      res.json({
        status: 200,
        msg: 'cart deleted successfuly',
        data: result,
      })
    } catch (error) {
      res.json({
        status: 500,
        msg: 'Something went wrong',
        data: error,
      })
    }
  }
