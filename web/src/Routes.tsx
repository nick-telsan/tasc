import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Route path="/home" page={HomePage} name="home" />
      </Private>
      <Private unauthenticated="home" roles="admin">
        <Route path="/admin" page={AdminPage} name="admin" />
      </Private>
      <Route path="/" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
