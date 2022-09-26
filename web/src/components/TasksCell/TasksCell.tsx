import { useState } from 'react'

import { Box } from '@chakra-ui/react'
import type { TasksQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { TaskCard } from '../TaskCard'
import { TaskInput } from '../TaskInput'

export const QUERY = gql`
  query TasksQuery($userId: String!) {
    tasks(userId: $userId) {
      id
      name
      position
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

type TasksType = {
  id: string
  name: string
  position: number
}

export const Success = ({ tasks }: CellSuccessProps<TasksQuery>) => {
  const availableHeight = window.screen.availHeight - 48 - 38
  const [localTasks, setLocalTasks] = useState<TasksType[]>(tasks)

  const addTask = (task: TasksType) => {
    const tempArray = tasks
    setLocalTasks(tempArray.concat(task))
  }

  return (
    <Box overflow="scroll" height={`${availableHeight}px`}>
      <TaskInput addTask={addTask} />
      {localTasks.map((task, index) => (
        <TaskCard key={index} task={task.name} />
      ))}
    </Box>
  )
}
