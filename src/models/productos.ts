import { Product } from "../interfaces/products.interface";
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
    images: {
      type: [String],
      required: false
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