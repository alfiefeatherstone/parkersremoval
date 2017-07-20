import express from 'express'
import { reactExpressHandler } from './src/react-express-handler'

const {
  PORT = '3000'
} = process.env

const app = express()
app.get('/healthcheck', (req, res) => {
  res.json({ up: true })
})

app.use(reactExpressHandler)

app.listen(PORT, err => {
  if(err) {
    console.log('STARTUP ERROR', err)
    process.exit(1)
  }

  console.log(`Listening on port ${PORT}`)
})
