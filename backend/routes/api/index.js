const router = require('express').Router()
const Sequelize = require('sequelize')

router.use('/customer', require('./customer'))

module.exports = router