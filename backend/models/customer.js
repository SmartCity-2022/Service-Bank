const {DataTypes, Sequelize} = require('sequelize')

module.exports = (sequelize) => {
  const Costumer = sequelize.define(
    'Costumer',
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
  return Costumer
}