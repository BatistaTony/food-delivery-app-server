import dotenv from 'dotenv'

import express, { Response } from 'express'
import cors from 'cors'
import { makeAppRoutes } from './routes'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

makeAppRoutes(app)

app.get('/', (_, res: Response) => {
  return res.json({ message: 'welcome to the server' })
})

app.listen(5000, () => {
  console.log('Server is running on port 5000....')
})
