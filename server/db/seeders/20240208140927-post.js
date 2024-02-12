'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          user_id: 2,
          category_id: 1,
          title: 'Пост 1 тема 1',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 1,
          title: 'Пост 2 тема 1',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 1,
          title: 'Пост 3 тема 1',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 2,
          title: 'Пост 1 тема 2',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 2,
          title: 'Пост 2 тема 2',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 2,
          title: 'Пост 3 тема 2',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 3,
          title: 'Пост 1 тема 3',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 3,
          title: 'Пост 2 тема 3',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 3,
          title: 'Пост 3 тема 3',
          description: '123',
          isModerated: true,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          category_id: 3,
          title: 'Пост 3 тема 3',
          description: '123',
          isModerated: false,
          isAdult: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    Example: await queryInterface.bulkDelete('Posts', null, {});
  },
};
