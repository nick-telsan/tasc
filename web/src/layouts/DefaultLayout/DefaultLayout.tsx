import { Box } from '@chakra-ui/react'

import styles from './defaultLayout.module.css'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box className={styles.background} h="100vh" w="100%">
      {children}
    </Box>
  )
}

export default DefaultLayout