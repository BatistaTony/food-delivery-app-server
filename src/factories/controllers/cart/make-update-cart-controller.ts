import { Request, Response } from 'express'
import { UpdateCartController } from '../../../controllers/cart/update-cart.controller'
import { UpdateCartService } from '../../../services/cart/update-cart.service'

export const makeUpdateCartController =
  () => async (req: Request, res: Response) => {
    const endpoint = new UpdateCartController().handler(new UpdateCartService())
    try {
      const result = await endpoint(req)
      res.json({ status: 200, msg: 'updated successfuly', data: result })
    } catch (error) {
      res.json({
        status: 500,
        msg: 'Something went wrong',
        data: error,
      })
    }
  }
