import { Product as ProductEntity} from "./../../Entities/product";
import { Request } from "express";
import { BaseController } from "../../typescript/controller";
import { Service } from "../../typescript/service";



export class UpdateProductController implements BaseController<ProductEntity> {
     handler(service: Service<ProductEntity | null>){
        return async (req: Request)=> {
            return await service.execute(req.body)
        }
    }
}