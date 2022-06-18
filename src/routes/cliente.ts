import { Router } from "express";
import { Cliente } from "../models/cliente";
import * as bcrypt from "bcryptjs";
import {
  validationLogin,
  validationRegister,
  validationUpdate,
} from "./validationCliente";
import path from "path";
import multer from "multer";

const clientRoutes = Router();

clientRoutes.get("/get", async (req: any, res: any) => {
  try {
    const allclients = await Cliente.find();
    res.json(allclients);
  } catch (error) {
    res.json(error);
  }
});

clientRoutes.post("/register", async (req: any, res: any) => {
  const { error } = validationRegister(req.body);

  if (error) {
    res.json({ message: error.details[0].message });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.senha, salt);

    function imgValue() {
      if (!req.body.img) {
        return "user.png";
      } else {
        return req.body.img;
      }
    }

    const clienteObj = new Cliente({
      img: imgValue(),
      nome: req.body.nome,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
      senha: hashedpassword,
    });

    const telefoneExist = await Cliente.findOne({
      telefone: req.body.telefone,
    });

    if (telefoneExist) {
      res.json({ message: "Número do telefone já existe" });
    } else {
      try {
        const savedCliente = await clienteObj.save();
        res.json({ cliente: savedCliente });
      } catch (error) {
        res.json({ message: error });
      }
    }
  }
});

clientRoutes.delete("/delete", async (req: any, res: any) => {
  const id = req.body.id;

  try {
    const removedCliente = await Cliente.findOneAndRemove({ _id: id });
    res.json(removedCliente);
  } catch (error) {
    res.json(error);
  }
});

clientRoutes.post("/getOne", async (req: any, res: any) => {
  const id = req.body.id;

  if (id) {
    try {
      const clienteEnc = await Cliente.findOne({ _id: id });

      if (clienteEnc) {
        res.json(clienteEnc);
      } else {
        res.json({ message: "Utilizador não encontrado" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ message: "id vazio" });
  }
});

clientRoutes.patch("/update", async (req: any, res: any) => {
  const { error } = validationUpdate(req.body);

  if (error) {
    res.json({ message: error.details[0].message });
  } else {
    const user = {
      id: req.body.id,
      senha: req.body.senha,
    };

    const userobj = {
      nome: req.body.nome,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
    };

    const userExist = await Cliente.findOne({ _id: user.id });

    if (userExist) {
      const validaUser = await bcrypt.compare(user.senha, userExist.senha);

      if (validaUser) {
        const updatedUser = await Cliente.findOneAndUpdate(
          { _id: userExist.id },
          {
            nome: userobj.nome,
            telefone: userobj.telefone,
            endereco: userobj.endereco,
          }
        );

        res.json(updatedUser);
      } else {
        res.json({ message: "Não tem permissão para actualizar os dados" });
      }
    } else {
      res.json({ message: "Utilizador não existe" });
    }
  }
});

clientRoutes.post("/login", async (req: any, res: any) => {
  const { error } = validationLogin(req.body);

  if (error) {
    res.json({ message: error.details[0].message });
  } else {
    const cliente = {
      telefone: req.body.telefone,
      senha: req.body.senha,
    };

    try {
      const clienteEnc = await Cliente.findOne({ telefone: cliente.telefone });

      if (clienteEnc) {
        const validUser = await bcrypt.compare(cliente.senha, clienteEnc.senha);

        if (validUser) {
          res.json({ cliente: clienteEnc });
        } else {
          res.json({ message: "Utilizador não encontrado" });
        }
      } else {
        res.json({ message: "Utilizador não encontrado" });
      }
    } catch (error: any) {
      res.json({ message: error });
    }
  }
});

clientRoutes.post("/uploadPhoto/:userid", async (req: any, res: any) => {
  try {
    const storage = multer.diskStorage({
      destination: "../cliente/public/img/avatar",
      filename: (req: any, file: any, cb: any) => {
        cb(null, req.params.userid + path.extname(file.originalname));

        try {
          const updatedCliente = Cliente.findOneAndUpdate(
            { _id: req.params.userid },
            { img: req.params.userid + path.extname(file.originalname) }
          );
          console.log(req.params.userid + path.extname(file.originalname));
        } catch (err) {
          console.log(err);
        }
      },
    });

    const upload = multer({
      storage: storage,
      limits: { fileSize: 1000000 },
    }).single("myimage");

    upload(req, res, (err: any) => {
      console.log({ file: req.body });
      res.json({ file: req.body });
    });
  } catch (error) {
    console.log(error);
  }
});

export { clientRoutes };
