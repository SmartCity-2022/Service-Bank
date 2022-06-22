const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Account = sequelize.define(
    'Account',
    {
      IBAN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      credit: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    }
  )
  
  return Account
}