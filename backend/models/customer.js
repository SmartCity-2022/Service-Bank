const {DataTypes, Sequelize} = require('sequelize')

module.exports = (sequelize) => {
  const Customer = sequelize.define(
    'Customer',
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
  return Customer
}