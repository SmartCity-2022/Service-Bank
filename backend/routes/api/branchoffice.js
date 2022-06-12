var router = require('express').Router()

router.get('/', async (req, res) => {

    try { 
       let branchoffice = await req.app.get('sequelize').models.Branchoffice.findAll()
       res.json(branchoffice).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let branchoffice = await req.app.get('sequelize').models.Branchoffice.findByPk(req.params.id)
       res.json(branchoffice).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    try {
        let branchoffice = await req.app.get('sequelize').models.Branchoffice.create(req.body)
        res.json(branchoffice).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let branchoffice = await req.app.get('sequelize').models.Branchoffice.findByPk(req.params.id)
        branchoffice = await branchoffice.update(req.body)
        return res.json(branchoffice).status(200)
      }
      catch(error) {
        res.sendStatus(401)
      }
})

router.delete('/:id', async (req, res) => {

    try {
        await req.app.get('sequelize').models.Branchoffice.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router