import { Product } from "../interfaces";
import { Schema, model } from "mongoose";


const ProductSchema = new Schema<Product>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ProductModel = model('productos', ProductSchema)