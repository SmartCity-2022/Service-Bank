const {Sequelize, AccessDeniedError} = require('sequelize')
const config = require('../config')

module.exports = () => {
  let sequelize
  sequelize = new Sequelize(config.databaseUrl)

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

  Account.hasMany(Transaction)
  Account.hasMany(Transaction)

  Card.belongsTo(Account)

  return sequelize
}