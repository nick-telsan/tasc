import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <div>
        <span>Logged in as {currentUser.email}</span>{' '}
        <button type="button" onClick={logOut}>
          Logout
        </button>
      </div>
    </>
  )
}

export default HomePage
