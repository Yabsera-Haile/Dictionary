'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dictionary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Language}) {
      // define association here
      this.belongsTo(Language,{foreignKey:'language'})
    }
  }
  Dictionary.init({
    id:
    {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    word: 
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    defn: 
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: 
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    example: 
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
  }, {
    sequelize,
    tableName:'dictionary',
    modelName: 'Dictionary',
  });
  return Dictionary;
};