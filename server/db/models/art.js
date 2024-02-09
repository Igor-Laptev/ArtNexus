'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    static associate({ Gallery }) {
      this.belongsTo(Gallery, { foreignKey: 'gallery_id' });
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
      gallery_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Galleries',
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
