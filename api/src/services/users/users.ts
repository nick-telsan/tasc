import CryptoJS from 'crypto-js'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

function hashPassword(text: string, salt?: string) {
  const useSalt = salt || CryptoJS.lib.WordArray.random(128 / 8).toString()

  return {
    password: CryptoJS.PBKDF2(text, useSalt, {
      keySize: 256 / 32,
    }).toString(),
    salt: useSalt,
  }
}

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = async ({
  input,
}) => {
  const emailTaken = await db.user.findFirst({ where: { email: input.email } })

  if (emailTaken) {
    console.error('Email Taken')
    return
  }

  const hashedPasswordAndSalt = hashPassword(input.password)

  return db.user.create({
    data: {
      email: input.email,
      hashedPassword: hashedPasswordAndSalt.password,
      salt: hashedPasswordAndSalt.salt,
      roles: input.role,
    },
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
