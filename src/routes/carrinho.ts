import { Router } from "express";
import { Cart } from "../models/carrinho";
import { Cliente } from "../models/cliente";
import { Pizza } from "../models/pizza";

const cartRoutes = Router();

cartRoutes.get("/getCarts", async (req: any, res: any) => {
  try {
    const cart = await Cart.find({
      $or: [{ status: "Entregada" }, { status: "Cancelada" }],
    });
    res.json({ cart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/getCartsToday", async (req: any, res: any) => {
  try {
    const cart = await Cart.find();
    res.json({ cart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/getCartsOn", async (req: any, res: any) => {
  try {
    const cart = await Cart.find({ closed: true });
    res.json({ cart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/getCartsPd", async (req: any, res: any) => {
  try {
    const cart = await Cart.find({ closed: true, status: "Pendente" });
    res.json({ cart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/getCartsEntr", async (req: any, res: any) => {
  try {
    const cart = await Cart.find({ closed: true, status: "Entregada" });
    res.json({ cart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/getCartsAC", async (req: any, res: any) => {
  try {
    const cart = await Cart.find({ closed: true, status: "A caminho..." });
    res.json({ cart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.post("/postCart", async (req: any, res: any) => {
  try {
    const clienteExist = await Cliente.findOne({ _id: req.body.userid });
    const pizzaExist = await Pizza.findOne({ _id: req.body.producto.pizza.id });

    if (clienteExist && pizzaExist) {
      const cartExist = await Cart.findOne({
        userid: req.body.userid,
        status: "Pendente",
      });

      if (cartExist) {
        console.log(cartExist);
        if (cartExist.closed) {
          res.json({ closed: true });
        } else {
          var productos = await cartExist.producto;

          if (productos) {
            productos.push(req.body.producto);

            const updatedCart = await Cart.findOneAndUpdate(
              { _id: cartExist._id, status: "Pendente" },
              { producto: productos }
            );
            res.json({ cart: updatedCart });
          } else {
            const updatedCart = await Cart.findOneAndUpdate(
              { _id: cartExist._id, status: "Pendente" },
              { producto: req.body.producto }
            );
            res.json({ cart: updatedCart });
          }
        }
      } else {
        const userObj = await Cliente.findOne({ _id: req.body.userid });

        const cart = new Cart({
          userid: req.body.userid,
          producto: req.body.producto,
          endereco: req.body.endereco
            ? req.body.endereco
            : clienteExist.endereco,
          userObj: userObj,
          data_car: req.body.data_car,
        });

        try {
          const cartSaved: any = await cart.save();

          console.log(userObj);

          res.json({ cart: cartSaved });
        } catch (error) {
          res.json({ message: error });
        }
      }
    } else {
      res.json({ message: "Dados enviados desconhecidos" });
    }
  } catch (error: any) {
    res.json({ message: error.message });
  }
});

cartRoutes.post("/deletePizza/:id", async (req: any, res: any) => {
  try {
    const producto = req.body.producto;

    if (producto.length === 0) {
      const deletedCart = await Cart.findOneAndDelete({ _id: req.params.id });

      res.json({ cart: deletedCart });
    } else {
      const cart = await Cart.findOneAndUpdate(
        { _id: req.params.id },
        { producto: producto }
      );
      res.json({ cart: cart });
    }
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/getCart/:userid", async (req: any, res: any) => {
  try {
    const cart = await Cart.findOne({
      userid: req.params.userid,
      status: "Pendente",
    });

    res.json({ cart: cart });
  } catch (error) {
    res.json({ message: error });
  }
});

cartRoutes.post("/closeCart/:id", async (req: any, res: any) => {
  var preco_total = req.body.preco_total;
  var date = req.body.date;
  var qtd_total = req.body.quantidade_total;

  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: req.params.id },
      {
        closed: true,
        preco_total: preco_total,
        data_car: date,
        quantidade_total: qtd_total,
      }
    );

    res.json({ cart: cart });
  } catch (error) {
    res.json({ message: error });
  }
});

cartRoutes.post("/deliveryCart/:id", (req: any, res: any) => {
  var id = req.params.id;

  try {
    const cartdelivered = Cart.findOneAndUpdate(
      { _id: id },
      { entregado: true }
    );
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.post("/openCart/:id", async (req: any, res: any) => {
  var id = req.params.id;

  try {
    const cartOpened = await Cart.findOneAndUpdate(
      { _id: id },
      { closed: false }
    );

    res.json({ cartOpened });
  } catch (err) {
    console.log(err);
  }
});

cartRoutes.post("/confirmCart/:id", async (req: any, res: any) => {
  var id = req.params.id;
  try {
    const confirmedCart = await Cart.findOneAndUpdate(
      { _id: id },
      { status: "A caminho..." }
    );
    res.json({ confirmedCart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.post("/Cancel/:id", async (req: any, res: any) => {
  var id = req.params.id;
  try {
    const confirmedCart = await Cart.findOneAndUpdate(
      { _id: id },
      { status: "Cancelada" }
    );
    res.json({ confirmedCart });
  } catch (error) {
    console.log(error);
  }
});

cartRoutes.get("/Entregado/:id", async (req: any, res: any) => {
  var id = req.params.id;
  try {
    const confirmedCart = await Cart.findOneAndUpdate(
      { _id: id },
      { status: "Entregada" }
    );
    res.json({ confirmedCart });
  } catch (error) {
    console.log(error);
  }
});

export { cartRoutes };
