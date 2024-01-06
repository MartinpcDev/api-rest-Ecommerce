import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/handleMessage";
import { getAllItems, postItem } from "../services/users.service";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAllItems()
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudieron encontrar los productos', 404)
  }
}

export const postUser = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    const response = await postItem(body)
    sendSuccess(res, response, 201)
  } catch (error) {
    sendError(res, 'No se pudo crear el usuario')
  }
}