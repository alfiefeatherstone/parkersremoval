import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Switch, Route } from 'react-router'
import routes from './routes'

export const reactExpressHandler = (req, res) => {
  const context = {}
  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  )

  res.send(html)
}

const App = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} exact={true} />
    ))}
  </Switch>
)
