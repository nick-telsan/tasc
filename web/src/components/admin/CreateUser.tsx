import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'

import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

type CreateUserInputType = {
  email: string
  password: string
  role: string
}

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

export const CreateUser = () => {
  const { register, handleSubmit } = useForm()

  const [create] = useMutation(CREATE_USER)

  const onSubmit = (input: CreateUserInputType) => {
    create({
      variables: {
        input,
      },
    })
  }

  return (
    <Box
      maxW="350px"
      border="1px"
      borderRadius="4px"
      textAlign="center"
      px="8px"
      pb="8px"
    >
      <Text fontSize="xl">Create User</Text>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            borderColor="black"
            my="4px"
            {...register('email')}
          />
          <Input
            placeholder="Password"
            borderColor="black"
            my="4px"
            {...register('password')}
          />
          <Input
            placeholder="Role"
            borderColor="black"
            my="4px"
            {...register('role')}
          />
          <Flex justify="center" my="4px">
            <Button colorScheme="teal" type="submit">
              Create User
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  )
}
