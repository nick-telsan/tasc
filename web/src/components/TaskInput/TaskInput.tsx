import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      position
    }
  }
`

type TaskSubmitType = {
  task: string
}

type TasksType = {
  id: string
  name: string
  position: number
}

type TaskInputProps = {
  addTask: (task: TasksType) => void
}

export const TaskInput = ({ addTask }: TaskInputProps) => {
  const { register, handleSubmit, reset } = useForm()
  const { currentUser } = useAuth()
  const [create] = useMutation(CREATE_TASK)

  const onSubmit = async (input: TaskSubmitType) => {
    create({
      variables: {
        input: {
          userId: currentUser.id,
          name: input.task,
        },
      },
    }).then((result) => {
      if (result.data?.createTask) {
        addTask(result.data?.createTask)
      }
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        maxW="375px"
        width="100%"
        display="flex"
        justifyContent="center"
        px="8px"
        my="8px"
      >
        <InputGroup>
          <Input
            {...register('task')}
            borderColor="blackAlpha.700"
            borderWidth="1px"
            borderStyle="solid"
            bgColor="whiteAlpha.300"
            backdropBlur="2xl"
            sx={{
              boxShadow: 'var(--shadow-elevation-medium)',
            }}
            placeholder="Create a new task"
            _placeholder={{ opacity: 1, color: 'black' }}
          />
          <InputRightElement>
            <IconButton
              aria-label="Create Task"
              variant="ghost"
              type="submit"
              icon={<AddIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </form>
  )
}
