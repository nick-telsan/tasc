import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { useForm } from '@redwoodjs/forms'

type TaskSubmitType = {
  task: string
}

type TaskInputProps = {
  addTask: (task: string) => void
}

export const TaskInput = ({ addTask }: TaskInputProps) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (input: TaskSubmitType) => addTask(input.task)

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
