import { Product } from "../../Entities/product";
import { BaseService } from "../../typescript/service";


export class DeleteProductService extends BaseService {
    async execute(id: string): Promise<Product | null>{

        const productExists = await this.prisma.product.findFirst({where: {
            id
        }})

        if(productExists?.id){
            const productDeleted = await this.prisma.product.delete({where: {
                id
            }})
            return productDeleted
        }else{
            return null
        }


        


    }
}