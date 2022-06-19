import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sabores: {
    type: String,
    required: true,
  },
  tamanho: {
    type: Object,
    required: true,
    familiar: {
      preco: {
        type: Number,
        required: true,
      },
    },
    grande: {
      preco: {
        type: Number,
        required: true,
      },
    },
    media: {
      preco: {
        type: Number,
        required: true,
      },
    },
    broto: {
      preco: {
        type: Number,
        required: true,
      },
    },
  },
});

export const Product: any = {};
