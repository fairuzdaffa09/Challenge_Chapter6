'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.user_game_biodata, {
        foreignKey: 'user_id'
      })
      this.hasMany(models.user_game_history, {
        foreignKey: 'user_id'
      })
      // define association here
    }
  }
  user_games.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_games',
  });
  return user_games;
};