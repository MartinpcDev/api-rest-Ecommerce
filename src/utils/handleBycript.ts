import { compare, hash } from 'bcrypt'

export const encrypt = async (pass: string): Promise<string> => {
  const passwordHash = await hash(pass, 8)
  return passwordHash
}

export const veryfied = async (pass: string, passHash: string): Promise<boolean> => {
  const isCorrect = await compare(pass, passHash)
  return isCorrect
}