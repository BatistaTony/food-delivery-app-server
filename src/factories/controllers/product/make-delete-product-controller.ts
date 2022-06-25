import { Response, Request } from 'express'
import { DeleteProductController } from '../../../controllers/product/delete-product.controller'
import { DeleteProductService } from '../../../services/product/delete-product.service'

export const makeDeleteProductController =
  () => async (req: Request, res: Response) => {
    const endpoint = new DeleteProductController().handler(
      new DeleteProductService(),
    )
    try {
      const resp = await endpoint(req)
      return res.json({
        status: resp ? 200 : 404,
        msg: resp ? 'product deleted sucessfully' : 'product not found',
        product: resp,
      })
    } catch (error) {
      return res.json({
        status: 500,
        msg: 'something went wrong',
        product: null,
      })
    }
  }
