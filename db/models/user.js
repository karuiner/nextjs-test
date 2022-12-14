"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Article, {
        foreignKey: "userId",
      });
      User.hasMany(models.Comment, {
        foreignKey: "userId",
      });
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      login: DataTypes.BOOLEAN,
      token: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "User",
    }
  );
  return User;
};
