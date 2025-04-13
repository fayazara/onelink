import { encodeURI, decode, isValid } from 'js-base64'
import type { Data } from '@/types'

export const encodeData = (obj: Data): string => {
  return encodeURI(JSON.stringify(obj))
}

export const decodeData = (base64: string): Data => {
  if (isValid(base64)) {
    return JSON.parse(decode(base64))
  } else {
    alert('Invalid base64 Data')
  }
}

export const generateId = () => Math.random().toString(36).slice(2, 10)
