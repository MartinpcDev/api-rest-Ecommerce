import { UserModel } from "../models/users";
import { User } from "../interfaces";
import { encrypt } from "../utils/handleBycript";

export const getAllItems = async (): Promise<User[] | null> => {
  const responseItems = await UserModel.find({})
  return responseItems
}

export const postItem = async ({ email, password, direccion }: User): Promise<User | string> => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return 'ALREADY_USER'

  const passHash = await encrypt(password)
  const responseItem = await UserModel.create({ email, password: passHash, direccion })
  return responseItem
} 