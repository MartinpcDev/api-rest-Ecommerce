import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/handleMessage";
import { getAllItems, loginService, registerService } from "../services/auth.service";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAllItems()
    sendSuccess(res, response)
  } catch (error) {
    sendError(res, 'No se pudieron encontrar los productos', 404)
  }
}

export const registerUser = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    const response = await registerService(body)
    sendSuccess(res, response, 201,'Usuario registrado')
  } catch (error) {
    sendError(res, 'No se pudo crear el usuario')
  }
}

export const loginCtrl = async ({ body }: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = body
    const response = await loginService({ email, password })
    if (response === 'La contraseña es incorrecta') {
      sendError(res, response, 404)
    } else if (response === 'El usuario no existe') {
      sendError(res, response, 404)
    } else {
      sendSuccess(res, response, 200, 'Usuario Logeado')
    }
  } catch (error) {
    sendError(res, 'No se pudo hacer login')
  }

}