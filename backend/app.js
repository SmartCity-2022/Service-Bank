const express = require('express')
const app = express()
var cors = require('cors')

require('dotenv').config()

const models = require('./models')()

app.use(cors())
app.use(express.json())
app.set('sequelize', models)
app.use(require('./routes'))

app.listen(process.env.API_PORT, () => {
  console.log('Backend listening on:' + process.env.API_URL + process.env.API_PORT)
})