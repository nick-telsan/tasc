import type {
  QueryResolvers,
  MutationResolvers,
  TaskRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tasks: QueryResolvers['tasks'] = ({ userId }) => {
  return db.task.findMany({
    where: {
      userId,
    },
    orderBy: {
      position: 'asc',
    },
  })
}

export const task: QueryResolvers['task'] = ({ userId, id }) => {
  return db.task.findFirst({
    where: { userId, id },
  })
}

export const createTask: MutationResolvers['createTask'] = async ({
  input,
}) => {
  const position =
    (await db.task.count({
      where: {
        userId: input.userId,
        complete: false,
      },
    })) + 1

  return db.task.create({
    data: {
      name: input.name,
      userId: input.userId,
      complete: false,
      position,
    },
  })
}

export const updateTask: MutationResolvers['updateTask'] = ({ id, input }) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask: MutationResolvers['deleteTask'] = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task: TaskRelationResolvers = {
  user: (_obj, { root }) => {
    return db.task.findUnique({ where: { id: root?.id } }).user()
  },
}
