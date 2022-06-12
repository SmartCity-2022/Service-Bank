const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Card = sequelize.define(
    'Card',
    {
      expirydate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
      }
    }
  )
  
  return Card
}