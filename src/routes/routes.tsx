import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Media from '../pages/media/media'
import Home from '../pages/home/home'

const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/media' exact>
        <Media />
      </Route>
      <Route path='/some_two' exact></Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default useRoutes
