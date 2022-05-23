const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Account = sequelize.define(
    'Account',
    {
      IBAN: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      credit: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  )
  
  return Account
}