import {hash} from 'bcrypt'

export const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass,8)
  return passwordHash
}