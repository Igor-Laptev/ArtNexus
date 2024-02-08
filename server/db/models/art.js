'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    static associate({ Post }) {
      this.belongsTo(Post, { foreignKey: 'post_id' });
    }
  }
  Art.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      src: {
        type: DataTypes.TEXT,
      },
      title: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Art',
    }
  );
  return Art;
};
