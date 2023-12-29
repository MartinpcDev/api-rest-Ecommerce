import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/handleMessage";
import { getAllItems, postItem } from "../services/products.service";

export const getAllProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAllItems()
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudieron encontrar los productos', 404)
  }
}

export const getProductById = (req: Request, res: Response) => {
  try {
    sendSuccess(res, { item: `item con id: ${req.params.id}` })
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