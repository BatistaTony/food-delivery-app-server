import { Router } from 'express'
// import { Customer } from "../models/customer";
// import * as bcrypt from "bcryptjs";
// import {
//   validationLogin,
//   validationRegister,
//   validationUpdate,
// } from "../utils/validation-customer";
// import path from "path";
// import multer from "multer";

const customerRoutes = Router()

// customerRoutes.get("/get", async (req: any, res: any) => {
//   try {
//     const allcustomers = await Customer.find();
//     res.json(allcustomers);
//   } catch (error) {
//     res.json(error);
//   }
// });

// customerRoutes.post("/register", async (req: any, res: any) => {
//   const { error } = validationRegister(req.body);

//   if (error) {
//     res.json({ message: error.details[0].message });
//   } else {
//     const salt = await bcrypt.genSalt(10);
//     const hashedpassword = await bcrypt.hash(req.body.senha, salt);

//     function imgValue() {
//       if (!req.body.img) {
//         return "user.png";
//       } else {
//         return req.body.img;
//       }
//     }

//     const CustomerObj = new Customer({
//       img: imgValue(),
//       nome: req.body.nome,
//       telefone: req.body.telefone,
//       endereco: req.body.endereco,
//       senha: hashedpassword,
//     });

//     const telefoneExist = await Customer.findOne({
//       telefone: req.body.telefone,
//     });

//     if (telefoneExist) {
//       res.json({ message: "Número do telefone já existe" });
//     } else {
//       try {
//         const savedCustomer = await CustomerObj.save();
//         res.json({ Customer: savedCustomer });
//       } catch (error) {
//         res.json({ message: error });
//       }
//     }
//   }
// });

// customerRoutes.delete("/delete", async (req: any, res: any) => {
//   const id = req.body.id;

//   try {
//     const removedCustomer = await Customer.findOneAndRemove({ _id: id });
//     res.json(removedCustomer);
//   } catch (error) {
//     res.json(error);
//   }
// });

// customerRoutes.post("/getOne", async (req: any, res: any) => {
//   const id = req.body.id;

//   if (id) {
//     try {
//       const CustomerEnc = await Customer.findOne({ _id: id });

//       if (CustomerEnc) {
//         res.json(CustomerEnc);
//       } else {
//         res.json({ message: "Utilizador não encontrado" });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     res.json({ message: "id vazio" });
//   }
// });

// customerRoutes.patch("/update", async (req: any, res: any) => {
//   const { error } = validationUpdate(req.body);

//   if (error) {
//     res.json({ message: error.details[0].message });
//   } else {
//     const user = {
//       id: req.body.id,
//       senha: req.body.senha,
//     };

//     const userobj = {
//       nome: req.body.nome,
//       telefone: req.body.telefone,
//       endereco: req.body.endereco,
//     };

//     const userExist = await Customer.findOne({ _id: user.id });

//     if (userExist) {
//       const validaUser = await bcrypt.compare(user.senha, userExist.senha);

//       if (validaUser) {
//         const updatedUser = await Customer.findOneAndUpdate(
//           { _id: userExist.id },
//           {
//             nome: userobj.nome,
//             telefone: userobj.telefone,
//             endereco: userobj.endereco,
//           }
//         );

//         res.json(updatedUser);
//       } else {
//         res.json({ message: "Não tem permissão para actualizar os dados" });
//       }
//     } else {
//       res.json({ message: "Utilizador não existe" });
//     }
//   }
// });

// customerRoutes.post("/login", async (req: any, res: any) => {
//   const { error } = validationLogin(req.body);

//   if (error) {
//     res.json({ message: error.details[0].message });
//   } else {
//     const Customer = {
//       telefone: req.body.telefone,
//       senha: req.body.senha,
//     };

//     try {
//       const CustomerEnc = await Customer.findOne({
//         telefone: Customer.telefone,
//       });

//       if (CustomerEnc) {
//         const validUser = await bcrypt.compare(
//           Customer.senha,
//           CustomerEnc.senha
//         );

//         if (validUser) {
//           res.json({ Customer: CustomerEnc });
//         } else {
//           res.json({ message: "Utilizador não encontrado" });
//         }
//       } else {
//         res.json({ message: "Utilizador não encontrado" });
//       }
//     } catch (error: any) {
//       res.json({ message: error });
//     }
//   }
// });

// customerRoutes.post("/uploadPhoto/:userid", async (req: any, res: any) => {
//   try {
//     const storage = multer.diskStorage({
//       destination: "../Customer/public/img/avatar",
//       filename: (req: any, file: any, cb: any) => {
//         cb(null, req.params.userid + path.extname(file.originalname));

//         try {
//           const updatedCustomer = Customer.findOneAndUpdate(
//             { _id: req.params.userid },
//             { img: req.params.userid + path.extname(file.originalname) }
//           );
//           console.log(req.params.userid + path.extname(file.originalname));
//         } catch (err) {
//           console.log(err);
//         }
//       },
//     });

//     const upload = multer({
//       storage: storage,
//       limits: { fileSize: 1000000 },
//     }).single("myimage");

//     upload(req, res, (err: any) => {
//       console.log({ file: req.body });
//       res.json({ file: req.body });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

export { customerRoutes }
