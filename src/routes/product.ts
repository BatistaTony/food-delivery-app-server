import { Router } from 'express'
import { makeCreateProductController } from '../factories/controllers/product/make-create-product-controller'
import { makeDeleteProductController } from '../factories/controllers/product/make-delete-product-controller'
import { makeGetAllProductController } from '../factories/controllers/product/make-get-all-product-controller'
import { makeUpdateProductController } from '../factories/controllers/product/make-update-product-controller'

const productRoutes = Router()
productRoutes.get('/getAll', makeGetAllProductController())
productRoutes.post('/create', makeCreateProductController())
productRoutes.delete('/delete/:id', makeDeleteProductController())
productRoutes.post('/update', makeUpdateProductController())
export { productRoutes }
