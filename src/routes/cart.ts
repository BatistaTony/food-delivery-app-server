import { Router } from 'express'
import { makeCreateCartController } from '../factories/controllers/cart/make-create-cart-controller'
import { makeDeleteCartController } from '../factories/controllers/cart/make-delete-cart-controller'
import { makeGetCartController } from '../factories/controllers/cart/make-get-cart-controller'
import { makeUpdateCartController } from '../factories/controllers/cart/make-update-cart-controller'
const cartRoutes = Router()

cartRoutes.get('/', makeGetCartController())

cartRoutes.get('/getCartsToday', async (req: any, res: any) => {})

cartRoutes.get('/getCartsOn', async (req: any, res: any) => {})

cartRoutes.get('/getCartsPd', async (req: any, res: any) => {})

cartRoutes.get('/getCartsEntr', async (req: any, res: any) => {})

cartRoutes.get('/getCartsAC', async (req: any, res: any) => {})

cartRoutes.post('/create', makeCreateCartController())

cartRoutes.post('/update', makeUpdateCartController())

cartRoutes.delete('/:id', makeDeleteCartController())

cartRoutes.get('/getCart/:userid', async (req: any, res: any) => {})

cartRoutes.post('/closeCart/:id', async (req: any, res: any) => {})

cartRoutes.post('/deliveryCart/:id', (req: any, res: any) => {})

cartRoutes.post('/openCart/:id', async (req: any, res: any) => {})

cartRoutes.post('/confirmCart/:id', async (req: any, res: any) => {})

cartRoutes.post('/Cancel/:id', async (req: any, res: any) => {})

cartRoutes.get('/Entregado/:id', async (req: any, res: any) => {})

export { cartRoutes }
