import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/handleMessage";
import { deleteItem, editItem, getAllItems, getItemById, postItem } from "../services/products.service";

export const getAllProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAllItems()
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudieron encontrar los productos', 404)
  }
}

export const getProductById = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getItemById(id)
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudo encontrar el producto', 404)
  }
}

export const postProduct = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    const response = await postItem(body)
    sendSuccess(res, response, 201)
  } catch (error) {
    sendError(res, 'No se pudo insertar el producto')
  }
}

export const editProduct = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await editItem(id, body)
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudo editar el producto', 404)
  }
}

export const deleteProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await deleteItem(id)
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudo encontrar el producto', 404)
  }
}