import { ProductModel } from "../models/productos";
import { Product } from "../interfaces/products.interface";

export const getAllItems = async (): Promise<Product[] | null> => {
  const responseItems = await ProductModel.find({})
  return responseItems
}

export const postItem = async (item: Product): Promise<Product | null> => {
  const responseItem = await ProductModel.create(item)
  return responseItem
}

export const getItemById = async (id: string): Promise<Product | null> => {
  const responseItem = await ProductModel.findOne({ _id: id })
  return responseItem
}