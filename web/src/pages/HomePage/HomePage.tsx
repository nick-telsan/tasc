import { useState } from 'react'

import { Box } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import { ListInput } from 'src/components/ListInput'
import { Navbar } from 'src/components/Navbar'
import { TaskCard } from 'src/components/TaskCard'
import { TaskInput } from 'src/components/TaskInput'

type task = string

const HomePage = () => {
  const availableHeight = window.screen.availHeight - 48 - 38
  const [tasks, setTasks] = useState<task[]>([])

  const addTask = (task: task) => {
    console.log(task)
    const tempArray = tasks
    setTasks(tempArray.concat(task))
  }

  return (
    <>
      <MetaTags title="Tasc" description="Tasc out your life" />
      <Box position="relative" h="100vh">
        <Navbar />
        <Box overflow="scroll" height={`${availableHeight}px`}>
          <TaskInput addTask={addTask} />
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </Box>

        <ListInput />
      </Box>
    </>
  )
}

export default HomePage
