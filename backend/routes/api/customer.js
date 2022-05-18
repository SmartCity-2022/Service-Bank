var router = require('express').Router()

router.get('/', async (req, res) => {

    try { 
       let costumer = await req.app.get('sequelize').models.Costumer.findAll()
       res.json(costumer).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let customer = await req.app.get('sequelize').models.Customer.findByPk(req.params.id)
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

router.put('/:id', async (req, res) => {
    try {
        let customer = await req.app.get('sequelize').models.Customer.findByPk(req.params.id)
        customer = await customer.update(req.body)
        return res.json(customer).status(200)
      }
      catch(error) {
        res.sendStatus(401)
      }
})

router.delete('/:id', async (req, res) => {

    try {
        let customer = await req.app.get('sequelize').models.Customer.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router