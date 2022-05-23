var router = require('express').Router()

router.get('/', async (req, res) => {
    
    try { 
       let account = await req.app.get('sequelize').models.Account.findAll()
       res.json(account).status(200)
    }
    catch(error){
        console.log(error)
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let account = await req.app.get('sequelize').models.Account.findByPk(req.params.id)
       res.json(account).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    req.body.CustomerId = req.params.customerId

    try {
        let account = await req.app.get('sequelize').models.Account.create(req.body)
        res.json(account).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.delete('/:id', async (req, res) => {

    try {
        let account = await req.app.get('sequelize').models.Account.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router