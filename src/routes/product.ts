import { Router } from "express";
import { Product } from "../models/product";

const productRoutes = Router();

productRoutes.get("/getAll", async (req: any, res: any) => {
  console.log("working");
  try {
    const products = await Product.find();
    res.json({ products: products });
  } catch (err) {
    res.json({ message: err });
  }
});

productRoutes.get("/getOne/:id", async (req: any, res: any) => {
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

productRoutes.post("/register", async (req: any, res: any) => {
  const productExist = await Product.findOne({ nome: req.body.nome });

  if (!productExist) {
    const productObj = new Product({
      nome: req.body.nome,
      sabores: req.body.sabores,
      tamanho: req.body.tamanho,
    });

    try {
      const productsaved = await productObj.save();
      res.json({ product: "ADICIONADA COM SUCESSO" });
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    res.json({ message: "NOME DA product JÁ EXISTE" });
  }
});

productRoutes.delete("/delete/:id", async (req: any, res: any) => {
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

productRoutes.post("/update", async (req: any, res: any) => {
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
