import React from 'react'
import { Route } from 'react-router-dom'
import './not-found.css'

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) { staticContext.status = code }
    return children
  }} />
)

const NotFound = () => (
  <Status code={404}>
    <div id='not-found'>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)

export default NotFound
