import { Request, Response } from "express"
import { CreateProductController } from "../../controllers/product/create-product.controller"
import { CreateProductService } from "../../services/product/create-product.service"




export const makeCreateProductController = ()=>  async (req: Request, res: Response)=> {
        const endpoint  =  new CreateProductController().handler(new CreateProductService()) 

        try {
            const resp = await endpoint(req)

        return res.json({
            status:200,
            msg:"created successfuly",
            data: resp
        })
        }catch (error) {
             return res.json({
            status:500,
            msg: "something went wrong"
        })
        }
        
       }
    
