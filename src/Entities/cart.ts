import { Product } from './product'
import { Customer } from './customer'

export interface Cart {
    customer: Customer
    products: Product[]
    created_at?: Date
    status: string
}  