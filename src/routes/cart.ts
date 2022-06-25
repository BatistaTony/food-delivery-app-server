import { Router } from 'express'
import { makeCreateCartController } from '../factories/controllers/cart/make-create-cart-controller'
const cartRoutes = Router()

cartRoutes.get('/getCarts', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.find({
  //     $or: [{ status: "Entregada" }, { status: "Cancelada" }],
  //   });
  //   res.json({ cart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/getCartsToday', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.find();
  //   res.json({ cart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/getCartsOn', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.find({ closed: true });
  //   res.json({ cart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/getCartsPd', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.find({ closed: true, status: "Pendente" });
  //   res.json({ cart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/getCartsEntr', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.find({ closed: true, status: "Entregada" });
  //   res.json({ cart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/getCartsAC', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.find({ closed: true, status: "A caminho..." });
  //   res.json({ cart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.post('/create', makeCreateCartController())

cartRoutes.post('/deleteproduct/:id', async (req: any, res: any) => {
  // try {
  //   const producto = req.body.producto;
  //   if (producto.length === 0) {
  //     const deletedCart = await Cart.findOneAndDelete({ _id: req.params.id });
  //     res.json({ cart: deletedCart });
  //   } else {
  //     const cart = await Cart.findOneAndUpdate(
  //       { _id: req.params.id },
  //       { producto: producto }
  //     );
  //     res.json({ cart: cart });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/getCart/:userid', async (req: any, res: any) => {
  // try {
  //   const cart = await Cart.findOne({
  //     userid: req.params.userid,
  //     status: "Pendente",
  //   });
  //   res.json({ cart: cart });
  // } catch (error) {
  //   res.json({ message: error });
  // }
})

cartRoutes.post('/closeCart/:id', async (req: any, res: any) => {
  // var preco_total = req.body.preco_total;
  // var date = req.body.date;
  // var qtd_total = req.body.quantidade_total;
  // try {
  //   const cart = await Cart.findOneAndUpdate(
  //     { _id: req.params.id },
  //     {
  //       closed: true,
  //       preco_total: preco_total,
  //       data_car: date,
  //       quantidade_total: qtd_total,
  //     }
  //   );
  //   res.json({ cart: cart });
  // } catch (error) {
  //   res.json({ message: error });
  // }
})

cartRoutes.post('/deliveryCart/:id', (req: any, res: any) => {
  // var id = req.params.id;
  // try {
  //   const cartdelivered = Cart.findOneAndUpdate(
  //     { _id: id },
  //     { entregado: true }
  //   );
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.post('/openCart/:id', async (req: any, res: any) => {
  // var id = req.params.id;
  // try {
  //   const cartOpened = await Cart.findOneAndUpdate(
  //     { _id: id },
  //     { closed: false }
  //   );
  //   res.json({ cartOpened });
  // } catch (err) {
  //   console.log(err);
  // }
})

cartRoutes.post('/confirmCart/:id', async (req: any, res: any) => {
  // var id = req.params.id;
  // try {
  //   const confirmedCart = await Cart.findOneAndUpdate(
  //     { _id: id },
  //     { status: "A caminho..." }
  //   );
  //   res.json({ confirmedCart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.post('/Cancel/:id', async (req: any, res: any) => {
  // var id = req.params.id;
  // try {
  //   const confirmedCart = await Cart.findOneAndUpdate(
  //     { _id: id },
  //     { status: "Cancelada" }
  //   );
  //   res.json({ confirmedCart });
  // } catch (error) {
  //   console.log(error);
  // }
})

cartRoutes.get('/Entregado/:id', async (req: any, res: any) => {
  // var id = req.params.id;
  // try {
  //   const confirmedCart = await Cart.findOneAndUpdate(
  //     { _id: id },
  //     { status: "Entregada" }
  //   );
  //   res.json({ confirmedCart });
  // } catch (error) {
  //   console.log(error);
  // }
})

export { cartRoutes }
