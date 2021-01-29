import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Gallery from '../pages/gallery/gallery'
import Home from '../pages/home/home'

const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/media' exact>
        <Gallery />
      </Route>
      <Route path='/some_two' exact></Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default useRoutes
