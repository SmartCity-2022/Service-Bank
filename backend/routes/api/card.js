var router = require('express').Router()

router.get('/', async (req, res) => {

    try { 
       let card = await req.app.get('sequelize').models.Card.findAll()
       res.json(card).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let card = await req.app.get('sequelize').models.Card.findByPk(req.params.id)
       res.json(card).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    try {
        let card = await req.app.get('sequelize').models.Card.create(req.body)
        res.json(card).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let card = await req.app.get('sequelize').models.Card.findByPk(req.params.id)
        card = await card.update(req.body)
        return res.json(card).status(200)
      }
      catch(error) {
        res.sendStatus(401)
      }
})

router.delete('/:id', async (req, res) => {

    try {
        let card = await req.app.get('sequelize').models.Card.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router