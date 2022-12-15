"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Article, {
        foreignKey: "boardId",
      });
      // define association here
    }
  }
  Board.init(
    {
      boardname: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Board",
    }
  );
  return Board;
};
