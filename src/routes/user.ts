import { Router } from 'express'
// import { User } from "./../models/user";
// import { registerValidation, loginValidation } from "./validationschema";
// import bcrypt from "bcryptjs";

const userRoutes = Router()

// userRoutes.post("/admin/register", async (req: any, res: any) => {
//   const { error } = registerValidation(req.body);

//   if (error) {
//     res.json({ error: error.details[0].message });
//   } else {
//     const emailExist = await User.findOne({ email: req.body.email });

//     if (emailExist) {
//       res.json({ message: "Email ja existe" });
//     } else {
//       const salt = await bcrypt.genSalt(10);
//       const hashedsenha = await bcrypt.hash(req.body.senha, salt);

//       const user = new User({
//         nome: req.body.nome,
//         email: req.body.email,
//         senha: hashedsenha,
//       });

//       const usersaved = await user.save();

//       res.json({ id: usersaved._id });
//     }
//   }
// });

// userRoutes.post("/admin/login", async (req, res) => {
//   const { error } = loginValidation(req.body);

//   if (error) {
//     res.json({ error: error.details[0].message });
//   } else {
//     const emailExist = await User.findOne({ email: req.body.email });

//     if (emailExist) {
//       const isValid = await bcrypt.compare(req.body.senha, emailExist.senha);

//       if (isValid) {
//         res.json({ id: emailExist._id });
//       } else {
//         res.json({ message: "Usuario não existe" });
//       }
//     } else {
//       res.json({ message: "Usuario não existe" });
//     }
//   }
// });

export { userRoutes }
