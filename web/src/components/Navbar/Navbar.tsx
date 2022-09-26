import { Container, IconButton, Text } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'

import { Logout } from '../Icons'

export const Navbar = () => {
  const { logOut } = useAuth()

  return (
    <Container
      w="100%"
      borderBottomColor="blackAlpha.700"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      bgColor="whiteAlpha.300"
      backdropBlur="2xl"
      py="2px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        boxShadow: 'var(--shadow-elevation-high)',
      }}
    >
      <Text fontSize="xl" fontWeight="bold">
        Tasc
      </Text>
      <IconButton
        aria-label="Logout"
        size="sm"
        variant="ghost"
        p="0"
        onClick={logOut}
        icon={<Logout boxSize="1.5rem" />}
      />
    </Container>
  )
}
