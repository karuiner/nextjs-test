"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Comment.belongsTo(models.Comment, {
        foreignKey: "articleId",
        onDelete: "cascade",
      });
      // define association here
    }
  }
  Comment.init(
    {
      comment: DataTypes.STRING,
      depth: DataTypes.INTEGER,
      writer: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Comment",
    }
  );
  return Comment;
};
