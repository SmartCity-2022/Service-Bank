const router = require('express').Router({mergeParams: true})
const {Op} = require('sequelize')
const auth = require('../auth')

router.get('/', auth.required, async (req, res) => {
    
    try { 
       let transaction = await req.app.get('sequelize').models.Transaction.findAll({
        where: {
            [Op.or]: [
                {SenderId:  req.params.accountId},
                {ReceiverId:  req.params.accountId}
            ]
        }
       })
       res.json(transaction).status(200)
    }
    catch(error){
        console.log(error)
        res.sendStatus(401)
    }
})

router.post('/', auth.required, async (req, res) => {

    req.body.SenderId = req.params.accountId
    
    let sender = await req.app.get('sequelize').models.Account.findOne({
        where: { id: req.params.accountId }
    })

    let receiver = await req.app.get('sequelize').models.Account.findOne({
        where: { iban: req.body.ReceiverId }
    })

    req.body.ReceiverId = receiver.id

    try {
        let transaction = await req.app.get('sequelize').models.Transaction.create(req.body)
        
        let newSenderCredit = sender.credit - parseInt(req.body.amount)
        let newReceiverCredit = receiver.credit + parseInt(req.body.amount)

        sender.update({credit: newSenderCredit})
        receiver.update({credit: newReceiverCredit})

        res.json(transaction).status(201)
      }
      catch(error) {
        console.log(error)
        res.sendStatus(401)
    }
})

router.delete('/:id', auth.required,async (req, res) => {

    try {
        await req.app.get('sequelize').models.Transaction.destroy({
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
