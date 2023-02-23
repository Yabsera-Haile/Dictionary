'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Dictionary}) {
      // define association here   
     this.hasMany(Dictionary,{foreignKey:'language'})
    }
  }
  Language.init({
    id:
    {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    title: 
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
  }, {
    sequelize,
    tableName:'language',
    modelName: 'Language',
  });
  return Language;
};