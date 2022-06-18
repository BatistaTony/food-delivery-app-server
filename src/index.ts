import express from "express";
import { dbInstance } from "./database";
import { cartRoutes } from "./routes/carrinho";
import { clientRoutes } from "./routes/cliente";
import { productRoutes } from "./routes/pizza";
import { userRoutes } from "./routes/user";
const app = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/pizza", productRoutes);
app.use("/cart", cartRoutes);
app.use("/cliente", clientRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000....");
});
