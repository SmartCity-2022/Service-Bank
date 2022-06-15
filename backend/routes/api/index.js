const router = require('express').Router()

router.use('/customer', require('./customer'))
router.use('/account', require('./account'))
router.use('/account/:accountId/card', require('./card'))
router.use('/account/:accountId/transaction', require('./transaction'))
router.use('/consultant', require('./consultant'))
router.use('/branchoffice', require('./branchoffice'))


module.exports = router