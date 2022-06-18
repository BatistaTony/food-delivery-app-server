import express, { Response } from "express";
import { makeAppRoutes } from "./routes";

const app = express();

app.use(express.json());

makeAppRoutes(app);

app.get("/", (_, res: Response) => {
  return res.json({ message: "welcome to the server" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000....");
});
