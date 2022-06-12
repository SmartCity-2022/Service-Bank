const {DataTypes, Sequelize} = require('sequelize')

module.exports = (sequelize) => {
  const Customer = sequelize.define(
    'Customer',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }
  )
  return Customer
}