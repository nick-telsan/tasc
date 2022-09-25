import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

function hashPassword(text: string, salt?: string) {
  const useSalt = salt || CryptoJS.lib.WordArray.random(128 / 8).toString()

  return {
    password: CryptoJS.PBKDF2(text, useSalt, {
      keySize: 256 / 32,
    }).toString(),
    salt: useSalt,
  }
}

async function createUser(email: string) {
  const password = hashPassword('password')

  return await db.user.create({
    data: {
      email,
      hashedPassword: password.password,
      salt: password.salt,
    },
  })
}

export default async () => {
  try {
    const admin = await createUser('nick+admin@evergrown.dev')
    console.log(admin)
  } catch (error) {
    console.error(error)
  }
}
