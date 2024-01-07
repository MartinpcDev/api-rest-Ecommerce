import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101'

export const generateToken = (id: string): string => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}