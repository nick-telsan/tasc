import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { useForm } from '@redwoodjs/forms'

type ListSubmitType = {
  list: string
}

export const ListInput = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (input: ListSubmitType) => console.log(input)

  return (
    <Box position="fixed" bottom="8px" w="100%" px="8px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box maxW="375px" width="100%" display="flex" justifyContent="center">
          <InputGroup>
            <Input
              {...register('list')}
              borderColor="blackAlpha.700"
              borderWidth="1px"
              borderStyle="solid"
              bgColor="hsla(56, 97%, 87%, 0.40)"
              backdropBlur="2xl"
              sx={{
                boxShadow: 'var(--shadow-elevation-high)',
              }}
              placeholder="Create a new list"
              _placeholder={{ opacity: 1, color: 'black' }}
            />
            <InputRightElement>
              <IconButton
                aria-label="Create List"
                variant="ghost"
                type="submit"
                icon={<AddIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </form>
    </Box>
  )
}
