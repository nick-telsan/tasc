import type { Task } from '@prisma/client'

import { tasks, task, createTask, updateTask, deleteTask } from './tasks'
import type { StandardScenario } from './tasks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tasks', () => {
  scenario('returns all tasks', async (scenario: StandardScenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario: StandardScenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario: StandardScenario) => {
    const result = await createTask({
      input: {
        name: 'String',
        complete: true,
        position: 3811010,
        userId: scenario.task.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.complete).toEqual(true)
    expect(result.position).toEqual(3811010)
    expect(result.userId).toEqual(scenario.task.two.userId)
  })

  scenario('updates a task', async (scenario: StandardScenario) => {
    const original = (await task({ id: scenario.task.one.id })) as Task
    const result = await updateTask({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a task', async (scenario: StandardScenario) => {
    const original = (await deleteTask({ id: scenario.task.one.id })) as Task
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
