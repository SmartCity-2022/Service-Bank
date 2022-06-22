const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const models = require('./models')()
const rmq = require("./rabbitmq")

const app = express()

app.set('sequelize', models)

app.use(express.json())
app.use(cors({origin: true, credentials: true}))
app.use(cookieParser())
app.use(require('./routes'))

app.get('sequelize').sync().then(async () => {

  app.listen(process.env.API_PORT, async () => {
    console.log('Backend listening on: ' + process.env.API_URL + process.env.API_PORT)
    
    await rmq.listen("", "service.world", (secret) => {
      process.env.SECRET = secret
    })
    await rmq.publish("service.hello", "bankenportal")
  
  })
})