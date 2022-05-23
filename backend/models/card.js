const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Card = sequelize.define(
    'Card',
    {
      expirydate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }
  )
  
  return Card
}