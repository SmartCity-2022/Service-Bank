const {Sequelize, AccessDeniedError} = require('sequelize')
require('dotenv').config()

module.exports = () => {
  let sequelize
  sequelize = new Sequelize(process.env.DATABASE_URL)

  sequelize.sync().then(console.log("Connection etablished"))

  const Account = require('./account')(sequelize)
  const Branchoffice = require('./branchoffice')(sequelize)
  const Customer = require('./customer')(sequelize)
  const Consultant = require('./consultant')(sequelize)
  const Card = require('./card')(sequelize)
  const Transaction = require('./transaction')(sequelize)

  Branchoffice.hasMany(Consultant)

  Consultant.hasMany(Customer)

  Customer.hasMany(Account)

  Transaction.belongsTo(Account, {as: 'SenderID'})
  Transaction.belongsTo(Account, {as: 'ReceiverID'})

  Card.belongsTo(Account)

  return sequelize
}