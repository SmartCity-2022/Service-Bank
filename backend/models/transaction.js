const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Transaction = sequelize.define(
    'Transaction',
    {
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      purposeofuse: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
  
  return Transaction
}