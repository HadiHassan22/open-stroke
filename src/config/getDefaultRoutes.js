import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import React, { lazy } from 'react'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'
import { Route } from 'react-router-dom'

const SignIn = lazy(() => import('rmw-shell/lib/pages/SignIn/SignIn'))
const MyAccount = lazy(() => import('rmw-shell/lib/pages/MyAccount/MyAccount'))

const getDefaultRoutes = (appConfig) => {
  return [
    <UnauthorizedRoute
      path="/signin"
      redirectTo={appConfig?.auth?.redirectTo || '/'}
      exact
      component={SignIn}
    />,
    <AuthorizedRoute path="/my_account" exact component={MyAccount} />,
 

    <Route component={appConfig?.pages?.PageNotFound} />,
  ]
}

export default getDefaultRoutes
