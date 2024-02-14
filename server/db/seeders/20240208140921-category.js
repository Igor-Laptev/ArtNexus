'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: '3D',
          img: '/categories/3d.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Abstract',
          img: '/categories/abstraction.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Automotive',
          img: '/categories/auto.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
