import express from 'express'
import { Api } from './storage'


const key = ''
const keyId = ''

Api.init(keyId, key).then(api => {
  app.listen(3001)
})

const app = express()
app.get('/', (req, res) => {
  res.status(200)
  res.send('perse')
})
