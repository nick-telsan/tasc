import { Box } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import { ListInput } from 'src/components/ListInput'
import { Navbar } from 'src/components/Navbar'
import TasksCell from 'src/components/TasksCell/TasksCell'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Tasc" description="Tasc out your life" />
      <Box position="relative" h="100vh">
        <Navbar />
        <TasksCell userId={currentUser.id} />

        <ListInput />
      </Box>
    </>
  )
}

export default HomePage
