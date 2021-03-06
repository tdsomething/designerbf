import { sign } from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '@/constants'

export const getWelcome = (params = 'World') => {
  return `Hello, ${params}!!!`
}

type DefineGenJwt = (data: unknown) => string

export const genJwt: DefineGenJwt = (data: unknown) => {
  const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 8
  return sign({ data: data, exp: expires }, JWT_SECRET_KEY)
}
