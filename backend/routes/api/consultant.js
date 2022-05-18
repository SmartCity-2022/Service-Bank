var router = require('express').Router()

router.get('/', async (req, res) => {

    try { 
       let consultant = await req.app.get('sequelize').models.Consultant.findAll()
       res.json(consultant).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let consultant = await req.app.get('sequelize').models.Consultant.findByPk(req.params.id)
       res.json(consultant).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    try {
        let consultant = await req.app.get('sequelize').models.Consultant.create(req.body)
        res.json(consultant).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let consultant = await req.app.get('sequelize').models.Consultant.findByPk(req.params.id)
        consultant = await consultant.update(req.body)
        return res.json(consultant).status(200)
      }
      catch(error) {
        res.sendStatus(401)
      }
})

router.delete('/:id', async (req, res) => {

    try {
        let consultant = await req.app.get('sequelize').models.Consultant.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router