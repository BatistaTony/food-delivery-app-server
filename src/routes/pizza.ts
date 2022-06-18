import { Router } from "express";
import { Pizza } from "../models/pizza";

const productRoutes = Router();

productRoutes.get("/getAll", async (req: any, res: any) => {
  console.log("working");
  try {
    const pizzas = await Pizza.find();
    res.json({ pizzas: pizzas });
  } catch (err) {
    res.json({ message: err });
  }
});

productRoutes.get("/getOne/:id", async (req: any, res: any) => {
  var pizza_id = req.params.id;

  if (pizza_id) {
    try {
      const pizza = await Pizza.findOne({ _id: pizza_id });
      res.json({ pizza: pizza });
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    res.json({ message: "Id do producto ?" });
  }
});

productRoutes.post("/register", async (req: any, res: any) => {
  const pizzaExist = await Pizza.findOne({ nome: req.body.nome });

  if (!pizzaExist) {
    const pizzaObj = new Pizza({
      nome: req.body.nome,
      sabores: req.body.sabores,
      tamanho: req.body.tamanho,
    });

    try {
      const pizzasaved = await pizzaObj.save();
      res.json({ pizza: "ADICIONADA COM SUCESSO" });
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    res.json({ message: "NOME DA PIZZA JÁ EXISTE" });
  }
});

productRoutes.delete("/delete/:id", async (req: any, res: any) => {
  const pizza_id = req.params.id;

  if (pizza_id) {
    try {
      const pizzaDeleted = await Pizza.findOneAndDelete({ _id: pizza_id });
      res.json(pizzaDeleted);
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    res.json({ message: "Id do producto ?" });
  }
});

productRoutes.post("/update", async (req: any, res: any) => {
  var pizza_id = await req.body.id;

  const pizzaObj = new Pizza({
    nome: req.body.nome,
    sabores: req.body.sabores,
    tamanho: req.body.tamanho,
  });

  if (pizza_id) {
    const pizzaUpdated = await Pizza.findOneAndUpdate(
      { _id: pizza_id },
      {
        nome: pizzaObj.nome,
        sabores: pizzaObj.sabores,
        tamanho: pizzaObj.tamanho,
      }
    );

    if (pizzaUpdated) {
      res.json({ message: "Pizza actualizado com sucesso" });
    } else {
      res.json({ message: "Erro ao actualizar a pizza" });
    }
  } else {
    res.json({ message: "id producto" });
  }
});

export { productRoutes };
