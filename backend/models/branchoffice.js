const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Branchoffice = sequelize.define(
    'Branchoffice',
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
  
  return Branchoffice
}