const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  const Consultant = sequelize.define(
    'Consultant',
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  )
  
  return Consultant
}