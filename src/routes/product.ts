import { Router, Response, Request } from "express";
import { Prisma, PrismaClient, Product } from "@prisma/client";
import { uid } from "uid";
const prisma = new PrismaClient();

const productRoutes = Router();

productRoutes.get("/getAll", async (req: Request, res: Response) => {
  console.log("working");
  // try {
  //   const products = await Product.find();
  //   res.json({ products: products });
  // } catch (err) {
  //   res.json({ message: err });
  // }
});

productRoutes.get("/getOne/:id", async (req: Request, res: Response) => {
  var product_id = req.params.id;

  if (product_id) {
    try {
      const product = await Product.findOne({ _id: product_id });
      res.json({ product: product });
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    res.json({ message: "Id do producto ?" });
  }
});

interface ProducType {
  name: string;
  cover: string;
  description: string;
  price: number;
}

productRoutes.post("/create", async (req: Request, res: Response) => {
  const { name, cover, description, price }: ProducType = req.body;

  const product: Product = await prisma.product.create({
    data: {
      cover: cover,
      description: description,
      id: uid(16),
      name: name,
      price: price,
    },
  });

  console.log(product);
  res.json(product);
});

productRoutes.delete("/delete/:id", async (req: Request, res: Response) => {
  const product_id = req.params.id;

  if (product_id) {
    try {
      const productDeleted = await Product.findOneAndDelete({
        _id: product_id,
      });
      res.json(productDeleted);
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    res.json({ message: "Id do producto ?" });
  }
});

productRoutes.post("/update", async (req: Request, res: Response) => {
  var product_id = await req.body.id;

  const productObj = new Product({
    nome: req.body.nome,
    sabores: req.body.sabores,
    tamanho: req.body.tamanho,
  });

  if (product_id) {
    const productUpdated = await Product.findOneAndUpdate(
      { _id: product_id },
      {
        nome: productObj.nome,
        sabores: productObj.sabores,
        tamanho: productObj.tamanho,
      }
    );

    if (productUpdated) {
      res.json({ message: "product actualizado com sucesso" });
    } else {
      res.json({ message: "Erro ao actualizar a product" });
    }
  } else {
    res.json({ message: "id producto" });
  }
});

export { productRoutes };
