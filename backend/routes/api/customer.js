var router = require('express').Router()

router.get('/', async (req, res) => {

    try { 
       let customer = await req.app.get('sequelize').models.Customer.findAll()
       res.json(customer).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.get('/:customerId', async (req, res) => {

    try { 
       let customer = await req.app.get('sequelize').models.Customer.findByPk(req.params.customerId)
       res.json(customer).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    try {
        let customer = await req.app.get('sequelize').models.Customer.create(req.body)
        res.json(customer).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.put('/:customerId', async (req, res) => {
    try {
        let customer = await req.app.get('sequelize').models.Customer.findByPk(req.params.customerId)
        customer = await customer.update(req.body)
        return res.json(customer).status(200)
      }
      catch(error) {
        res.sendStatus(401)
      }
})

router.delete('/:customerId', async (req, res) => {

    try {
        let customer = await req.app.get('sequelize').models.Customer.destroy({where: {id: req.params.customerId}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router