var router = require('express').Router({mergeParams: true})
const auth = require('../auth')

router.get('/', auth.required, async (req, res) => {
    
    try { 
       let account = await req.app.get('sequelize').models.Account.findAll({
        where: {
            CustomerId:  req.params.customerId
        }
      })
       res.json(account).status(200)
    }
    catch(error){
        console.log(error)
        res.sendStatus(401)
    }
})

router.get('/:id', auth.required, async (req, res) => {

    try { 
       let account = await req.app.get('sequelize').models.Account.findOne({
        where: {
          id:  req.params.id,
          CustomerId: req.customer.id
        }
       })

        res.json(account).status(200)
    }
    catch(error){
        res.sendStatus(401)
    }
})

router.post('/', auth.required, async (req, res) => {

    req.body.CustomerId = req.customer.id

    try {
        let account = await req.app.get('sequelize').models.Account.create(req.body)
        res.json(account).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.delete('/:id', auth.required, async (req, res) => {

    try {
        await req.app.get('sequelize').models.Account.destroy({
            where: {
              id:  req.params.id,
              CustomerId: req.customer.id
            }
        })
        res.sendStatus(200)
    }
    catch(error) {
        res.sendStatus(401)
    }
})

module.exports = router