import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

export const Customer = mongoose.model("cliente", ClienteSchema);
