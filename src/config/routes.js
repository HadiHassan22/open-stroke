/* eslint-disable react/jsx-key */
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const About = lazy(() => import('../pages/About'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Predict = lazy(()=> import("../pages/Predict"))
const GettingStarted = lazy(() =>
  import('../pages/Documentation/GettingStarted')
)

const routes = [
  <Route path="/about" exact component={About} />,
  <Route path="/predict" exact component={Predict} />,
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
]

export default routes
