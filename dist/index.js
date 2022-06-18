"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carrinho_1 = require("./routes/carrinho");
const cliente_1 = require("./routes/cliente");
const pizza_1 = require("./routes/pizza");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", user_1.userRoutes);
app.use("/pizza", pizza_1.productRoutes);
app.use("/cart", carrinho_1.cartRoutes);
app.use("/cliente", cliente_1.clientRoutes);
app.listen(5000, () => {
    console.log("Server is running on port 5000....");
});
