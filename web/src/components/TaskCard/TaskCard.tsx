import { Box, Checkbox } from '@chakra-ui/react'

type TaskCardProps = {
  task: string
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Box
      maxW="375px"
      width="100%"
      display="flex"
      justifyContent="center"
      px="8px"
      my="8px"
    >
      <Box
        height="40px"
        width="100%"
        borderRadius="md"
        borderColor="blackAlpha.700"
        borderWidth="1px"
        borderStyle="solid"
        bgColor="whiteAlpha.300"
        backdropBlur="2xl"
        px="4"
        display="flex"
        alignItems="center"
        sx={{
          boxShadow: 'var(--shadow-elevation-medium)',
        }}
      >
        <Checkbox borderColor="black" colorScheme="red" size="lg">
          {task}
        </Checkbox>
      </Box>
    </Box>
  )
}
