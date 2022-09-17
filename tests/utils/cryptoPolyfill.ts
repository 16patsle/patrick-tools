import crypto from 'crypto'

export const cryptoPolyfill = {
  getRandomValues: arr => crypto.randomBytes(arr.length),
}
