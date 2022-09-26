import { Router, Route, Private, Set } from '@redwoodjs/router'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
        <Private unauthenticated="login">
          <Route path="/home" page={HomePage} name="home" />
        </Private>
        <Private unauthenticated="home" roles="admin">
          <Route path="/admin" page={AdminPage} name="admin" />
        </Private>
        <Route path="/" page={LoginPage} name="login" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
