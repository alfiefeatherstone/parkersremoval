import { renderToString } from 'react-dom/server'
import { StaticRouter, Switch, Route } from 'react-router'
import { matchPath } from 'react-router-dom'
import routes from './routes'
import createDocumentContextProvider from './components/lib/DocumentContextProvider'

export const reactExpressHandler = (req, res) => {
  const context = {}

  const data = []
  routes.some(route => {
    const match = matchPath(req.url, route)
    if (match)
      data.push(route.loadData ? route.loadData(match) : {})
    return match
  })

  const DocumentContextProvider = createDocumentContextProvider()

  Promise.all(data).then(data => data.pop()).then(state => {
    const html = renderToString(
      <StaticRouter
        location={req.url}
        context={context}
      >
        <DocumentContextProvider>
          <App />
        </DocumentContextProvider>
      </StaticRouter>
    )

    const document = DocumentContextProvider.getContext()
  res.send(`<!doctype html>
<head>
  <title>${document.title}</title>
</head>
<body>
  <div id="app">${html}</div>
</body>
`)

  })
  .catch(err => {
    console.log('[ERROR]', err)
    res.status(500).send(err.message)
  })
}

const App = () => (
  <Switch>
    {routes.map((route, n) => (
      <Route {...route} key={`route-${n}`} exact={true} />
    ))}
  </Switch>
)
