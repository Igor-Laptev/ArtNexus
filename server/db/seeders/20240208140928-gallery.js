'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Galleries',
      [
        {
          post_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_id: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   post_id: 53,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   post_id: 54,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Galleries', null, {});
  },
};
