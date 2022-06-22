import { Product as ProductEntity } from "../../Entities/product";
import { BaseController } from "../../typescript/controller";
import { Service } from "../../typescript/service";



export class GetAllProductController implements BaseController<ProductEntity[]> {
    handler(service: Service<ProductEntity[]>){ 
        return async () =>{
            return await service.execute()
        }
}
}