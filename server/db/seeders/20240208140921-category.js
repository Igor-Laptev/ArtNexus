'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: '3D',
          img: 'https://cdnb.artstation.com/p/assets/images/images/000/992/149/4k/frederic-daoust-mewtwo.jpg?1443929221',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Abstract',
          img: 'https://cdnb.artstation.com/p/assets/images/images/072/383/801/large/artist-archana-mishra-mathematics-01.jpg?1707239823',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Automotive',
          img: 'https://cdna.artstation.com/p/assets/images/images/072/428/248/large/wiktor-urbanczyk-01.jpg?1707331277',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
