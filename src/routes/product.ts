import { Router, Response, Request } from "express";
import { makeCreateProductController } from "../factories/controllers/make-create-product-controller";
import { makeDeleteProductController } from "../factories/controllers/make-delete-product-controller";
import { makeGetAllProductController } from "../factories/controllers/make-get-all-product-controller";
import { makeUpdateProductController } from "../factories/controllers/make-update-product-controller";

const productRoutes = Router();

productRoutes.get("/getAll", makeGetAllProductController());

productRoutes.get("/getOne/:id", async (req: Request, res: Response) => {
  // const product_id = req.params.id;

  // if (product_id) {
  //   try {
  //     const product = await Product.findOne({ _id: product_id });
  //     res.json({ product });
  //   } catch (error) {
  //     res.json({ message: error });
  //   }
  // } else {
  //   res.json({ message: "Id do producto ?" });
  // }
});



productRoutes.post("/create", makeCreateProductController());
productRoutes.delete("/delete/:id", makeDeleteProductController());
productRoutes.post("/update", makeUpdateProductController());

export { productRoutes };
