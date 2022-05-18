var router = require('express').Router()

router.get('/', async (req, res) => {

    try { 
       let transaction = await req.app.get('sequelize').models.Transaction.findAll()
       res.json(transaction).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let transaction = await req.app.get('sequelize').models.Transaction.findByPk(req.params.id)
       res.json(transaction).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    try {
        let transaction = await req.app.get('sequelize').models.Transaction.create(req.body)
        res.json(transaction).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let transaction = await req.app.get('sequelize').models.Transaction.findByPk(req.params.id)
        transaction = await transaction.update(req.body)
        return res.json(transaction).status(200)
      }
      catch(error) {
        res.sendStatus(401)
      }
})

router.delete('/:id', async (req, res) => {

    try {
        let transaction = await req.app.get('sequelize').models.Transaction.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router