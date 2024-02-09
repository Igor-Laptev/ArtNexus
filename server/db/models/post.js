'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Category, Comment, Like, Gallery }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasOne(Gallery, { foreignKey: 'post_id' });
      this.hasMany(Comment, { foreignKey: 'post_id' });
      this.hasMany(Like, { foreignKey: 'post_id' });
    }
  }
  Post.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      title: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      isModerated: {
        type: DataTypes.BOOLEAN,
      },
      isAdult: {
        type: DataTypes.BOOLEAN,
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
      modelName: 'Post',
    }
  );
  return Post;
};
