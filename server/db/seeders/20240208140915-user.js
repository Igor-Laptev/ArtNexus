'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          email: 'admin@admin',
          password: await bcrypt.hash('admin', 10),
          avatar:
            'https://media.istockphoto.com/id/1192884194/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BD%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B0-%D1%84%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=612x612&w=0&k=20&c=2iqH3E46Qn2oH0N27wDZEYwm5qCAMjmd-aT8XGWtups=',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user',
          email: 'user@user',
          password: await bcrypt.hash('user', 10),
          avatar: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
