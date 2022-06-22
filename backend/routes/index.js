const router = require('express').Router()
const auth = require('./auth')

router.get('/auth', auth.required, (req, res) => {
    res.json(req.customer).status(200)
})

router.use('/', require('./api'))

module.exports = router