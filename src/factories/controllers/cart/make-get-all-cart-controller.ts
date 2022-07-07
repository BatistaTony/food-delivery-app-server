import { Request, Response } from 'express'
import { GetAllCartController } from '../../../controllers/cart/get-all-cart.controller'
import { GetAllCartService } from '../../../services/cart/get-all-cart.service'

export const makeGetAllCartController =
  () => async (req: Request, res: Response) => {
    const endpoint = new GetAllCartController().handler(new GetAllCartService())

    try {
      const result = await endpoint()
      res.json({ status: 200, msg: 'updated successfuly', data: result })
    } catch (error) {
      res.json({
        status: 500,
        msg: 'Something went wrong',
        data: JSON.stringify(error),
      })
    }
  }
