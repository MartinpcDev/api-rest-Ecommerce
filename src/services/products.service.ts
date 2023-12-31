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
  const responseItem = await ProductModel.findById({ _id: id })
  return responseItem
}

export const editItem = async (id: string, data: Product): Promise<Product | null> => {
  const responseItem = await ProductModel.findByIdAndUpdate({ _id: id }, data,{ new: true })
  return responseItem
}

export const deleteItem = async (id: string):Promise<Product | any> => {
  const responseItem = await ProductModel.findByIdAndDelete({ _id: id })
  return responseItem
}