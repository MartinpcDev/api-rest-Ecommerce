import { UserModel } from "../models/users";
import { User } from "../interfaces";
import { encrypt, veryfied } from "../utils/handleBycript";
import { generateToken } from "../utils/handleJwt";

export const getAllItems = async (): Promise<User[] | null> => {
  const responseItems = await UserModel.find({})
  return responseItems
}

export const registerService = async ({ email, password, direccion }: User): Promise<User | string> => {
  const checkIs = await UserModel.findOne({ email })

  if (checkIs) return 'El usuario ya esta registrado'

  const passHash = await encrypt(password)
  const responseItem = await UserModel.create({ email, password: passHash, direccion })
  return responseItem
}

export const loginService = async ({ email, password }: User): Promise<object | string> => {

  const checkIs = await UserModel.findOne({ email })

  if (!checkIs) return 'El usuario no existe'

  const passwordHash = checkIs.password
  const isCorrect = await veryfied(password, passwordHash)

  if(!isCorrect) return 'La contraseña es incorrecta'

  const token = generateToken(checkIs.email)

  const data = {
    token,
    user: checkIs
  }

  return data
}