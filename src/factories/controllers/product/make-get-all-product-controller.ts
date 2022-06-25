import { Response } from 'express'
import { GetAllProductController } from '../../../controllers/product/get-all-product.controller'
import { GetAllProductService } from '../../../services/product/get-all-product.service'

export const makeGetAllProductController =
  () => async (_: any, res: Response) => {
    const endpoint = new GetAllProductController().handler(
      new GetAllProductService(),
    )

    try {
      const resp = await endpoint()

      res.json({
        status: 200,
        products: resp,
      })
    } catch (error) {
      res.json({
        status: 500,
        msg: 'Something went wrong',
        product: null,
      })
    }
  }
