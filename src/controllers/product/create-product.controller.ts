import { Product as ProductEntity } from "../../Entities/product";
import { BaseController } from "../../typescript/controller";
import { Service } from "../../typescript/service";
import {Request} from 'express'


export class CreateProductController implements BaseController<ProductEntity> {
     handler(service: Service<ProductEntity>){
        return async (req: Request)=> {
            const productSaved = await service.execute(req.body)
            return productSaved
        }
    }
}