import { Response, Request } from 'express'
import { UpdateProductController } from '../../../controllers/product/update-product.controller'
import { UpdateProductService } from '../../../services/product/update-product.service'

export const makeUpdateProductController =
  () => async (req: Request, res: Response) => {
    const endpoint = new UpdateProductController().handler(
      new UpdateProductService(),
    )

    try {
      const resp = await endpoint(req)
      res.json({
        status: 200,
        msg: 'product updated successfully',
        product: resp,
      })
    } catch (error) {
      res.json({
        status: 500,
        msg: 'Something went wrong',
        product: null,
      })
    }
  }
