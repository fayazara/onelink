import {Base64} from 'js-base64';
import type { Data } from '@/types'

export const encodeData = (obj: Data): string => {
  return Base64.encodeURI(JSON.stringify(obj))
}

export const decodeData = (base64: string): Data => {
  if (!Base64.isValid(base64)) throw new Error('Invalid base64 Data')
  return JSON.parse(Base64.decode(base64))
}

export const generateId = () => Math.random().toString(36).slice(2, 10)
