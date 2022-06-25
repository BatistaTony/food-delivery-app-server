import { Application } from 'express'
import { cartRoutes } from './cart'
import { customerRoutes } from './customer'
import { productRoutes } from './product'
import { userRoutes } from './user'

export const makeAppRoutes = (app: Application) => {
  app.use('/user', userRoutes)
  app.use('/product', productRoutes)
  app.use('/cart', cartRoutes)
  app.use('/customer', customerRoutes)
}
