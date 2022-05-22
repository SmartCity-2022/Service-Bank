const router = require('express').Router()

//router.use('/customer/:customerId/account/:accountId/card', require('./card'))
//router.use('/customer/:customerId/account/:accountId/transaction', require('./transaction'))
router.use('/customer', require('./customer'))
router.use('/customer/:customerId/account', require('./account'))
router.use('/consultant', require('./consultant'))
router.use('/branchoffice', require('./branchoffice'))


module.exports = router