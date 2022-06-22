import { uid } from "uid";
import { Product } from "../../Entities/product";
import { BaseService } from "../../typescript/service";

export class CreateProductService extends BaseService {
    async execute(data: Product): Promise<Product>{
        const product = await this.prisma.product.create({
            data : {
                id: uid(16),
                cover: data.cover,
                description: data.description,
                name:  data.name,
                price: data.price,
            }
        })
        return product
    }
}