var router = require('express').Router({mergeParams: true})

router.get('/', async (req, res) => {
    
    try { 
       let transaction = await req.app.get('sequelize').models.Transaction.findAll({
        where: {
            AccountId:  req.params.accountId
        }
      })
       res.json(transaction).status(200)
    }
    catch(error){
        console.log(error)
        res.sendStatus(401)
    }
})

router.get('/:id', async (req, res) => {

    try { 
       let transaction = await req.app.get('sequelize').models.Transaction.findOne({
        where: {
          id:  req.params.id,
          AccountId: req.params.accountId
        }
       })

        res.json(transaction).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', async (req, res) => {

    req.body.AccountId = req.params.accountId

    try {
        let transaction = await req.app.get('sequelize').models.Transaction.create(req.body)
        res.json(transaction).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.delete('/:id', async (req, res) => {

    try {
        let transaction = await req.app.get('sequelize').models.Transaction.destroy({
            where: {
              id:  req.params.id,
              AccountId: req.params.accountId
            }
        })
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router