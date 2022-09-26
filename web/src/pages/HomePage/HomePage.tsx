import { MetaTags } from '@redwoodjs/web'

import { Navbar } from 'src/components/Navbar'
import { TaskInput } from 'src/components/TaskInput'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Tasc" description="Tasc out your life" />
      <Navbar />
      <TaskInput />
    </>
  )
}

export default HomePage
