"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.Board, {
        foreignKey: "boardId",
      });
      Article.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Article.hasMany(models.Comment, {
        foreignKey: "articleId",
        onDelete: "cascade",
      });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.STRING,
      view: DataTypes.INTEGER,
      writer: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Article",
    }
  );
  return Article;
};
